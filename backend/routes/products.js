require("dotenv").config();
const woocommerce = require("../config/wc");
const express = require("express");
const pool = require("../config/db");
const router = express.Router();
const verifyToken = require("../middleware/verifyToken");
const requireAdmin = require("../middleware/requireAdmin");
const upload = require("../config/multer");
const {
  syncProduct,
  syncVariations,
  syncCategories,
  syncImages,
  syncFullProduct,
  syncAllProducts,
  syncChangedProducts,
  saveProductToDatabase
} = require("../services/syncProducts");


router.get("/", async (_req, res) => {
  try {
    const [productsResult, variationsResult, categoriesResult, imagesResult] =
      await Promise.all([
        pool.query(`
          SELECT *
          FROM products
          WHERE status = 'publish' OR status = 'private'
          ORDER BY id
        `),

        pool.query(`
          SELECT *
          FROM product_variations
          ORDER BY woocommerce_id
        `),

        pool.query(`
          SELECT
            pcr.product_id,
            pc.woocommerce_id AS category_id,
            pc.name
          FROM product_category_relations pcr
          JOIN product_categories pc
            ON pc.id = pcr.category_id
        `),

        pool.query(`
          SELECT product_id, url, position
          FROM product_images
          ORDER BY position ASC
        `),
      ]);

    const variationsByProduct = new Map();
    for (const variation of variationsResult.rows) {
      const list = variationsByProduct.get(variation.product_id) || [];

      const regularPrice =
        variation.regular_price != null
          ? Number(variation.regular_price)
          : null;

      const salePrice =
        variation.sale_price != null
          ? Number(variation.sale_price)
          : null;

      const price =
        salePrice !== null && regularPrice !== null &&
        salePrice < regularPrice
          ? salePrice
          : Number(variation.price ?? regularPrice ?? 0);

      list.push({
        id: variation.woocommerce_id,
        name: variation.name,
        price,
        regularPrice,
        salePrice,
        onSale:
          salePrice !== null &&
          regularPrice !== null &&
          salePrice < regularPrice,
        stock: variation.stock_quantity ?? 0,
        inStock: variation.stock_status === "instock",
        image: variation.image_url || null,
      });

      variationsByProduct.set(variation.product_id, list);
    }

    const categoriesByProduct = new Map();
    for (const category of categoriesResult.rows) {
      const list = categoriesByProduct.get(category.product_id) || [];

      list.push({
        id: category.category_id,
        name: category.name,
      });

      categoriesByProduct.set(category.product_id, list);
    }

    const imagesByProduct = new Map();
    for (const image of imagesResult.rows) {
      const list = imagesByProduct.get(image.product_id) || [];
      list.push(image.url);
      imagesByProduct.set(image.product_id, list);
    }

    const products = productsResult.rows.map((product) => {
      const variations = variationsByProduct.get(product.id) || [];
      const categories = categoriesByProduct.get(product.id) || [];
      const images = imagesByProduct.get(product.id) || [];

      const hasVariations = product.type === "variable";

      const onSale = hasVariations
        ? variations.some((variation) => variation.onSale)
        : product.sale_price != null &&
          product.regular_price != null &&
          Number(product.sale_price) < Number(product.regular_price);

      const cheapestVariation = [...variations].sort((a, b) => a.price - b.price)[0];

      const regularPrice = hasVariations
        ? cheapestVariation?.regularPrice ?? null
        : product.regular_price != null
          ? Number(product.regular_price)
          : null;

      const salePrice = hasVariations
        ? cheapestVariation?.salePrice ?? null
        : product.sale_price != null
          ? Number(product.sale_price)
          : null;

      const price = hasVariations
        ? variations.length > 0
          ? Math.min(...variations.map((variation) => variation.price))
          : Number(product.price ?? 0)
        : Number(product.price ?? 0);

      const stock = hasVariations
        ? variations.reduce((sum, variation) => sum + Number(variation.stock), 0)
        : Number(product.stock_quantity ?? 0);

      const inStock = hasVariations
        ? variations.some((variation) => variation.inStock)
        : product.stock_status === "instock";

      return {
        id: product.woocommerce_id,
        name: product.name,
        preorder: product.preorder,
        price,
        originalPrice: regularPrice ?? price,
        regularPrice,
        salePrice,
        onSale,
        categories,
        image: images[0] || "",
        inStock,
        stock,
        hasVariations,
        variations,
        description: product.short_description || "",
      };
    });

    res.json(products);
  } catch (error) {
    console.error("Błąd pobierania produktów z PostgreSQL:", error);

    res.status(500).json({
      success: false,
      message: "Nie udało się pobrać produktów",
    });
  }
});

router.get("/:id/variations", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query(
      `
        SELECT
          woocommerce_id,
          name,
          price,
          regular_price,
          sale_price,
          stock_quantity,
          stock_status,
          image_url
        FROM product_variations
        WHERE product_id = (
          SELECT id
          FROM products
          WHERE woocommerce_id = $1
        )
        ORDER BY woocommerce_id
      `,
      [id]
    );

    res.json(
      result.rows.map((variation) => ({
        id: variation.woocommerce_id,
        name: variation.name,
        price: Number(variation.price),
        regularPrice: variation.regular_price !== null ? Number(variation.regular_price) : null,
        salePrice: variation.sale_price !== null ? Number(variation.sale_price) : null,
        stock: variation.stock_quantity ?? 0,
        inStock: variation.stock_status === "instock",
        image: variation.image_url || null,
      }))
    );
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Nie udało się pobrać wariantów produktu",
    });
  }
});

router.get("/:id/edit", verifyToken, requireAdmin, async (req, res) => {
  try {
    const { id } = req.params;

    // PSQL
    const result = await pool.query(
      `SELECT id FROM products WHERE woocommerce_id = $1`,
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Nie znaleziono produktu",
      });
    }

    const databaseProduct = result.rows[0];

    // WC
    const productResponse = await woocommerce.get(`/products/${id}`, {
      params: {
        _sync: Date.now(),
      },
    });

    const product = productResponse.data;

    // PSQL
    const [variationsResult, categoriesResult, imagesResult] =
      await Promise.all([
        pool.query(
          `SELECT *
          FROM product_variations
          WHERE product_id = $1
          ORDER BY woocommerce_id`,
          [databaseProduct.id]
        ),

        pool.query(
          `SELECT pc.woocommerce_id AS id, pc.name
          FROM product_category_relations pcr
          JOIN product_categories pc
            ON pc.id = pcr.category_id
          WHERE pcr.product_id = $1`,
          [databaseProduct.id]
        ),

        pool.query(
          `SELECT woocommerce_id, url, position
          FROM product_images
          WHERE product_id = $1
          ORDER BY position ASC`,
          [databaseProduct.id]
        ),
      ]);

    res.json({
      success: true,
      product,
      variations: variationsResult.rows,
      categories: categoriesResult.rows,
      images: imagesResult.rows,
    });
  } catch (error) {
    console.error(
      "Błąd pobierania produktu do edycji:",
      error.response?.data || error
    );

    res.status(error.response?.status === 404 ? 404 : 500).json({
      success: false,
      message:
        error.response?.status === 404
          ? "Nie znaleziono produktu w WooCommerce"
          : "Nie udało się pobrać produktu do edycji",
    });
  }
});

router.post(
  "/",
  verifyToken,
  requireAdmin,
  upload.fields([
    { name: "images", maxCount: 20 },
    { name: "variationImages", maxCount: 20 }
  ]), 
  async (req, res) => {
    const fs = require("fs");
    try {
      const {
        name,
        categoryIds,
        stock,
        description,
        price,
        salePrice,
        preorder,
        visible,
        sku,
        gtin,
        manageStock,
        soldIndividually,
        lowStockThreshold,
        backorders,
        inpostMethods,
        weight,
        length,
        width,
        height,
        posAvailable,
        purchaseNote,
        menuOrder,
        variations,
      } = req.body;
      const parsedCategoryIds = JSON.parse(categoryIds || "[]");
      const parsedVariations = JSON.parse(variations || "[]");
      const productImages = req.files?.images ?? [];
      const variationImages = req.files?.variationImages ?? [];
      const images = productImages.map((file) => ({ src: `${process.env.SERVER_URL}/uploads/${file.filename}` }));

      const response = await axios.post(
        `${process.env.WC_URL}/wp-json/wc/v3/products`,
        {
          name,
          type: parsedVariations.length > 0 ? "variable" : "simple",
          // NA PRODUKCJE status: visible ? "publish" : "private",
          status: "private",

          regular_price: String(price ?? ""),
          sale_price: String(salePrice ?? ""),
          description,
          categories: parsedCategoryIds.map((id) => ({ id: Number(id) })),
          attributes:
            parsedVariations.length > 0
              ? [
                  {
                    name: "Wariant",
                    visible: true,
                    variation: true,
                    options: parsedVariations.map((variation) => variation.name),
                  },
                ]
              : [],
          images,
          sku,
          global_unique_id: gtin,

          manage_stock: parsedVariations.length === 0 && manageStock,
          stock_quantity: parsedVariations.length === 0 && stock ? Number(stock) : null,
          sold_individually: soldIndividually,
          low_stock_amount: lowStockThreshold
            ? Number(lowStockThreshold)
            : null,

          backorders: backorders === "Nie zezwalaj"
            ? "no"
            : backorders === "Zezwalaj + poinformuj"
              ? "notify"
              : "yes",

          weight,
          dimensions: {
            length,
            width,
            height,
          },

          purchase_note: purchaseNote,
          menu_order: Number(menuOrder ?? 0),
          meta_data: [
        {
          key: "_hejmistrzu_preorder",
          value: preorder,
        },
        {
          key: "woo_inpost_shipping_methods_allowed",
          value: inpostMethods,
        }]
        },
        {
          params: {
            consumer_key: process.env.WC_CONSUMER_KEY,
            consumer_secret: process.env.WC_CONSUMER_SECRET,
          },
        }
      );
      for (const variation of parsedVariations) {
        const image = variation.imageIndex !== null
          ? variationImages[variation.imageIndex]
          : null;

        await axios.post(
          `${process.env.WC_URL}/wp-json/wc/v3/products/${response.data.id}/variations`,
          {
            regular_price: String(variation.price ?? ""),
            sale_price: String(variation.salePrice ?? ""),
            manage_stock: true,
            stock_quantity: variation.stock ? Number(variation.stock) : null,

            attributes:
              JSON.parse(req.body.variations || "[]").length > 0
                ? [
                    {
                      name: "Wariant",
                      visible: true,
                      variation: true,
                      options: [
                        ...new Set(
                          JSON.parse(req.body.variations || "[]")
                            .map((variation) => variation.name.trim())
                            .filter(Boolean)
                        ),
                      ],
                    },
                  ]
                : [],

            ...(image && {
              image: {
                src: `${process.env.SERVER_URL}/uploads/${image.filename}`,
              },
            }),
          },
          {
            params: {
              consumer_key: process.env.WC_CONSUMER_KEY,
              consumer_secret: process.env.WC_CONSUMER_SECRET,
            },
          }
        );
      }
      
      await syncFullProduct(response.data.id);

      Object.values(req.files ?? {}).flat().forEach((file) => {
        fs.unlink(file.path, (error) => {
          if (error) {
            console.error(
              "Nie udało się usunąć pliku:",
              error.message
            );
          }
        });
      });

      res.status(201).json({
        success: true,
        product: response.data,
      });
    } catch (error) {
      console.error(error.response?.data || error.message);

      res.status(error.response?.status || 500).json({
        success: false,
        message: "Nie udało się utworzyć produktu",
        error: error.response?.data || error.message,
      });
    }
  }
);

router.get("/sync-all", verifyToken, requireAdmin, async (_req, res) => {
  try {
    const results = await syncAllProducts();
    res.json({
      success: results.failed === 0,
      message: "Synchronizacja zakończona",
      ...results
    });
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(error.response?.status || 500).json({
      success: false,
      message: "Nie udało się rozpocząć synchronizacji",
    });
  }
});

router.get("/sync-changed", verifyToken, requireAdmin, async (_req, res) => {
  try {
    const results = await syncChangedProducts();
    res.json({
      success: results.failed === 0,
      message: "Synchronizacja zmienionych produktów zakończona",
      ...results
    });
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(error.response?.status || 500).json({
      success: false,
      message: "Nie udało się wykonać synchronizacji",
    });
  }
});

router.get("/sync/:id", verifyToken, requireAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const product = await syncProduct(id);
    res.json({
      success: true,
      message: `Produkt ${id} został zsynchronizowany`,
      product
    });

  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(error.response?.status || 500).json({
      success: false,
      message: "Nie udało się zsynchronizować produktu",
      error: error.response?.data || error.message
    });
  }
});

router.get("/sync/:id/variations", verifyToken, requireAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const variations = await syncVariations(id);

    res.json({
      success: true,
      message: `Zsynchronizowano ${variations.length} wariantów produktu ${id}`,
      variations: variations.map((variation) => ({
        woocommerce_id: variation.id,
        name: variation.name,
        price: variation.price,
        stock_quantity: variation.stock_quantity
      }))
    });
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(error.response?.status || 500).json({
      success: false,
      message: error.message || "Nie udało się zsynchronizować wariantów"
    });
  }
});

router.get("/sync/:id/categories", verifyToken, requireAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const categories = await syncCategories(id);
    res.json({
      success: true,
      message: `Zsynchronizowano ${categories.length} kategorii produktu ${id}`,
      categories: categories.map((category) => ({
        woocommerce_id: category.id,
        name: category.name,
        slug: category.slug
      }))
    });
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(error.response?.status || 500).json({
      success: false,
      message: error.message || "Nie udało się zsynchronizować kategorii"
    });
  }
});

router.get("/sync/:id/images", verifyToken, requireAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const images = await syncImages(id);
    res.json({
      success: true,
      message: `Zsynchronizowano ${images.length} zdjęć produktu ${id}`,
      images: images.map((image, index) => ({
        woocommerce_id: image.id,
        url: image.src,
        position: index
      }))
    });
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(error.response?.status || 500).json({
      success: false,
      message: error.message || "Nie udało się zsynchronizować zdjęć"
    });
  }
});

router.get("/sync/:id/full", verifyToken, requireAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const { product, variations, categories, images } = await syncFullProduct(id);
    res.json({
      success: true,
      message: `Produkt ${id} został w pełni zsynchronizowany`,
      product: {
        id: product.id,
        woocommerce_id: product.woocommerce_id,
        name: product.name
      },
      variations: variations.length,
      categories: categories.length,
      images: images.length
    });
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(error.response?.status || 500).json({
      success: false,
      message: error.message || "Nie udało się zsynchronizować produktu"
    });
  }
});

router.put(
  "/:id",
  verifyToken,
  requireAdmin,
  upload.fields([
    { name: "images", maxCount: 20 },
    { name: "variationImages", maxCount: 20 },
  ]),
  async (req, res) => {
    const fs = require("fs");

    try {
      const { id } = req.params;
      const {
        name,
        categoryIds,
        description,
        price,
        salePrice,
        preorder,
        visible,
        sku,
        gtin,
        manageStock,
        soldIndividually,
        lowStockThreshold,
        backorders,
        inpostMethods,
        weight,
        length,
        width,
        height,
        purchaseNote,
        menuOrder,
        existingImages,
      } = req.body;

      const parsedCategoryIds = JSON.parse(categoryIds || "[]");
      const retainedImages = JSON.parse(existingImages || "[]");
      const uploadedImages = req.files?.images ?? [];
      const parsedVariations = JSON.parse(req.body.variations || "[]");
      const hasVariations = parsedVariations.length > 0;

      const params = {
        consumer_key: process.env.WC_CONSUMER_KEY,
        consumer_secret: process.env.WC_CONSUMER_SECRET,
      };

      const imageList = [
        ...retainedImages
          .sort((a, b) => a.position - b.position)
          .map((image) => ({ id: image.woocommerce_id, src: image.url })),
        ...uploadedImages.map((file) => ({
          src: `${process.env.SERVER_URL}/uploads/${file.filename}`,
        })),
      ];

      const response = await axios.put(
        `${process.env.WC_URL}/wp-json/wc/v3/products/${id}`,
        {
          name,
          description,
          status: visible === "true" ? "publish" : "private",
          type: hasVariations ? "variable" : "simple",
          attributes: hasVariations
            ? [
                {
                  name: "Wariant",
                  visible: true,
                  variation: true,
                  options: [
                    ...new Set(
                      parsedVariations
                        .map((variation) => variation.name?.trim())
                        .filter(Boolean)
                    ),
                  ],
                },
              ]
            : [],
          regular_price: String(price ?? ""),
          sale_price: String(salePrice ?? ""),
          categories: parsedCategoryIds.map((categoryId) => ({
            id: Number(categoryId),
          })),
          images: imageList,
          sku,
          global_unique_id: gtin,
          manage_stock: manageStock === "true",
          stock_quantity: manageStock === "true" ? Number(req.body.stock) : null,
          sold_individually: soldIndividually === "true",
          low_stock_amount:
            lowStockThreshold !== "" ? Number(lowStockThreshold) : null,
          backorders:
            backorders === "Nie zezwalaj"
              ? "no"
              : backorders === "Zezwalaj + poinformuj"
                ? "notify"
                : "yes",
          weight,
          dimensions: { length, width, height },
          purchase_note: purchaseNote,
          menu_order: Number(menuOrder ?? 0),
          meta_data: [
            {
              key: "_hejmistrzu_preorder",
              value: preorder === "true",
            },
            {
              key: "woo_inpost_shipping_methods_allowed",
              value: JSON.parse(inpostMethods || "[]"),
            },
          ],
        },
        { params }
      );   

      const rawVariationImageIndexes = req.body.variationImageIndexes;
      const variationImageIndexes = 
        rawVariationImageIndexes == null ? []
          : Array.isArray(rawVariationImageIndexes) ? rawVariationImageIndexes
            : [rawVariationImageIndexes];

      const variationImageFiles = req.files?.variationImages ?? [];
      const existingVariationsResponse = await axios.get(
        `${process.env.WC_URL}/wp-json/wc/v3/products/${id}/variations`,
        {
          params: {
            ...params,
            per_page: 100,
          },
        }
      );

      const existingVariations = existingVariationsResponse.data;
      const submittedIds = parsedVariations
        .map((variation) => Number(variation.id))
        .filter((variationId) => Number.isInteger(variationId) && variationId > 0);

      for (const existingVariation of existingVariations) {
        if (!submittedIds.includes(existingVariation.id)) {
          await axios.delete(
            `${process.env.WC_URL}/wp-json/wc/v3/products/${id}/variations/${existingVariation.id}`,
            {
              params: {
                ...params,
                force: true,
              },
            }
          );
        }
      }

      for (let index = 0; index < parsedVariations.length; index++) {
        const variation = parsedVariations[index];
        const imagePosition = variationImageIndexes.indexOf(String(index));
        const imageFile = imagePosition >= 0 ? variationImageFiles[imagePosition] : null;

        const variationPayload = {
          regular_price: String(variation.price ?? ""),
          sale_price: String(variation.salePrice ?? ""),
          manage_stock: true,
          stock_quantity:
            variation.stock !== "" ? Number(variation.stock) : null,
          attributes: [
            {
              name: "Wariant",
              option: variation.name,
            },
          ],
        };

        if (imageFile) {
          variationPayload.image = {
            src: `${process.env.SERVER_URL}/uploads/${imageFile.filename}`,
          };
        } else if (variation.imageUrl) {
          variationPayload.image = {
            src: variation.imageUrl,
          };
        }

        const variationUrl = variation.id
          ? `${process.env.WC_URL}/wp-json/wc/v3/products/${id}/variations/${variation.id}`
          : `${process.env.WC_URL}/wp-json/wc/v3/products/${id}/variations`;

        if (variation.id) {
          await axios.put(variationUrl, variationPayload, { params });
        } else {
          await axios.post(variationUrl, variationPayload, { params });
        }
      }
      await saveProductToDatabase(response.data);
      await syncVariations(Number(id));
      await syncCategories(Number(id));
      await syncImages(Number(id));

      res.json({
        success: true,
        product: response.data,
      });
    } catch (error) {
      console.error(
        "Błąd aktualizacji produktu:",
        error.response?.data || error.message
      );

      res.status(error.response?.status || 500).json({
        success: false,
        message: "Nie udało się zaktualizować produktu",
        error: error.response?.data || error.message,
      });
    } finally {
      Object.values(req.files ?? {})
        .flat()
        .forEach((file) => {
          fs.unlink(file.path, (error) => {
            if (error) {
              console.error("Nie udało się usunąć pliku:", error.message);
            }
          });
        });
    }
  }
);

module.exports = router;