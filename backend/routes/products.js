require("dotenv").config();
const axios = require("axios");
const express = require("express");
const pool = require("../config/db");
const router = express.Router();

const toNumberOrNull = (value) => {
    if (value === "" || value === null || value === undefined) return null;
    const number = Number(value);
    return Number.isNaN(number) ? null : number;
};

const axiosWithRetry = async (url, config, retries = 3) => {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try { return await axios.get(url, config) }
    catch (error) {
      if (attempt === retries) { throw error }
      console.log(`Request nieudany. Próba ${attempt}/${retries}. Ponawiam...`);
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }
};

router.get("/", async (req, res) => {
  try {
    const params = {
      consumer_key: process.env.WC_CONSUMER_KEY,
      consumer_secret: process.env.WC_CONSUMER_SECRET,
      per_page: 100,
      page: 1,
    };

    const firstPage = await axios.get(`${process.env.WC_URL}/wp-json/wc/v3/products`, { params });
    const totalPages = Number(firstPage.headers["x-wp-totalpages"]);
    let allProducts = [...firstPage.data];
    for (let page = 2; page <= totalPages; page++) {
      const response = await axios.get(`${process.env.WC_URL}/wp-json/wc/v3/products`, { 
        params: {
          ...params,
          page,
        }
      });
      allProducts.push(...response.data);
    }

    const visibleProducts = allProducts.filter((product) => product.status === "publish");

    const products = visibleProducts.map(product => ({
      id: product.id,
      name: product.name,
      price: Number(product.price),
      regularPrice: Number(product.regular_price) || null,
      salePrice: Number(product.sale_price) || null,
      onSale: product.on_sale,
      categories: product.categories.map(category => ({
        id: category.id,
        name: category.name,
      })),
      image: product.images?.[0]?.src || "",
      inStock: product.stock_status === "instock",
      stock: product.stock_quantity ?? 0,
      description: product.short_description || "",
    }));
    res.json(products);
  } catch (error) {
    console.error(error.response?.data);
    res.status(500).json({
      success: false,
      message: "Nie udało się pobrać produktów",
    });
  }
});

// SYNCHRONIZACJA Z BAZĄ DANYCH

const syncProduct = async (id) => {
  const response = await axios.get(`${process.env.WC_URL}/wp-json/wc/v3/products/${id}`,
    {
      params: {
        consumer_key: process.env.WC_CONSUMER_KEY,
        consumer_secret: process.env.WC_CONSUMER_SECRET
      }
    }
  );

  const product = response.data;
  const query = `
    INSERT INTO products (
      woocommerce_id,
      name,
      slug,
      description,
      short_description,
      type,
      status,
      featured,
      catalog_visibility,
      sku,
      price,
      regular_price,
      sale_price,
      manage_stock,
      stock_quantity,
      stock_status,
      created_at,
      updated_at
    )
    VALUES (
      $1, $2, $3, $4, $5,
      $6, $7, $8, $9, $10,
      $11, $12, $13, $14, $15,
      $16, NOW(), NOW()
    )
    ON CONFLICT (woocommerce_id)
    DO UPDATE SET
      name = EXCLUDED.name,
      slug = EXCLUDED.slug,
      description = EXCLUDED.description,
      short_description = EXCLUDED.short_description,
      type = EXCLUDED.type,
      status = EXCLUDED.status,
      featured = EXCLUDED.featured,
      catalog_visibility = EXCLUDED.catalog_visibility,
      sku = EXCLUDED.sku,
      price = EXCLUDED.price,
      regular_price = EXCLUDED.regular_price,
      sale_price = EXCLUDED.sale_price,
      manage_stock = EXCLUDED.manage_stock,
      stock_quantity = EXCLUDED.stock_quantity,
      stock_status = EXCLUDED.stock_status,
      updated_at = NOW()
    RETURNING *;
  `;

  const values = [
    product.id,
    product.name,
    product.slug,
    product.description || null,
    product.short_description || null,
    product.type,
    product.status,
    product.featured,
    product.catalog_visibility || null,
    product.sku || null,
    toNumberOrNull(product.price),
    toNumberOrNull(product.regular_price),
    toNumberOrNull(product.sale_price),
    product.manage_stock,
    product.stock_quantity,
    product.stock_status
  ];

  const result = await pool.query(query, values);
  return result.rows[0];
};

const syncVariations = async (id) => {
  const productResult = await pool.query(
    `SELECT id, woocommerce_id
    FROM products
    WHERE woocommerce_id = $1`,
    [id]
  );

  if (productResult.rows.length === 0) { throw new Error(`Produkt WooCommerce ${id} nie istnieje w bazie`) }
  const localProductId = productResult.rows[0].id;
  const response = await axios.get(`${process.env.WC_URL}/wp-json/wc/v3/products/${id}/variations`,
    {
      params: {
        consumer_key: process.env.WC_CONSUMER_KEY,
        consumer_secret: process.env.WC_CONSUMER_SECRET,
        per_page: 100,
        page: 1
      }
    }
  );

  const variations = response.data;
  const variationIds = variations.map((variation) => variation.id);
  for (const variation of variations) {
    const attribute = variation.attributes?.[0];
    const price = variation.price !== "" ? Number(variation.price) : null;
    const regularPrice = variation.regular_price !== "" ? Number(variation.regular_price) : null;
    const salePrice = variation.sale_price !== "" ? Number(variation.sale_price) : null;
    const manageStock = variation.manage_stock === true;
    const stockQuantity = variation.stock_quantity !== null ? Number(variation.stock_quantity) : null;
    const weight = variation.weight !== "" ? Number(variation.weight) : null;
    const length = variation.dimensions?.length !== "" ? Number(variation.dimensions.length) : null;
    const width = variation.dimensions?.width !== "" ? Number(variation.dimensions.width) : null;
    const height = variation.dimensions?.height !== "" ? Number(variation.dimensions.height) : null;

    await pool.query(
      `INSERT INTO product_variations (
        woocommerce_id,
        product_id,
        name,
        sku,
        price,
        regular_price,
        sale_price,
        manage_stock,
        stock_quantity,
        stock_status,
        backorders_allowed,
        weight,
        length,
        width,
        height,
        image_url,
        attribute_name,
        attribute_value,
        created_at,
        updated_at
      )
      VALUES (
        $1, $2, $3, $4, $5, $6, $7, $8, $9, $10,
        $11, $12, $13, $14, $15, $16, $17, $18, $19, $20
      )
      ON CONFLICT (woocommerce_id)
      DO UPDATE SET
        product_id = EXCLUDED.product_id,
        name = EXCLUDED.name,
        sku = EXCLUDED.sku,
        price = EXCLUDED.price,
        regular_price = EXCLUDED.regular_price,
        sale_price = EXCLUDED.sale_price,
        manage_stock = EXCLUDED.manage_stock,
        stock_quantity = EXCLUDED.stock_quantity,
        stock_status = EXCLUDED.stock_status,
        backorders_allowed = EXCLUDED.backorders_allowed,
        weight = EXCLUDED.weight,
        length = EXCLUDED.length,
        width = EXCLUDED.width,
        height = EXCLUDED.height,
        image_url = EXCLUDED.image_url,
        attribute_name = EXCLUDED.attribute_name,
        attribute_value = EXCLUDED.attribute_value,
        updated_at = NOW()
      `,
      [
        variation.id,
        localProductId,
        variation.name,
        variation.sku || null,
        price,
        regularPrice,
        salePrice,
        manageStock,
        stockQuantity,
        variation.stock_status,
        variation.backorders_allowed,
        weight,
        length,
        width,
        height,
        variation.image?.src || null,
        attribute?.name || null,
        attribute?.option || null,
        variation.date_created ? new Date(variation.date_created) : new Date(),
        variation.date_modified ? new Date(variation.date_modified) : new Date()
      ]
    );
  }
  if (variationIds.length > 0) {
    await pool.query(
      `DELETE FROM product_variations
      WHERE product_id = $1
      AND woocommerce_id NOT IN (
        SELECT unnest($2::integer[])
      )`,
      [localProductId, variationIds]
    );
  } else {
    await pool.query(
      `DELETE FROM product_variations
      WHERE product_id = $1`,
      [localProductId]
    );
  }
  return variations;
};

const syncCategories = async (id) => {
  const productResult = await pool.query(
    `SELECT id
    FROM products
    WHERE woocommerce_id = $1`,
    [id]
  );

  if (productResult.rows.length === 0) { throw new Error(`Produkt WooCommerce ${id} nie istnieje w bazie`) }

  const localProductId = productResult.rows[0].id;
  const response = await axios.get(`${process.env.WC_URL}/wp-json/wc/v3/products/${id}`,
    {
      params: {
        consumer_key: process.env.WC_CONSUMER_KEY,
        consumer_secret: process.env.WC_CONSUMER_SECRET
      }
    }
  );

  const categories = response.data.categories || [];
  const localCategoryIds = [];
  for (const category of categories) {
    const categoryResult = await pool.query(
      `INSERT INTO product_categories (
        woocommerce_id,
        name,
        slug,
        created_at,
        updated_at
      )
      VALUES ($1, $2, $3, NOW(), NOW())
      ON CONFLICT (woocommerce_id)
      DO UPDATE SET
        name = EXCLUDED.name,
        slug = EXCLUDED.slug,
        updated_at = NOW()
      RETURNING id`,
      [
        category.id,
        category.name,
        category.slug
      ]
    );

    const localCategoryId = categoryResult.rows[0].id;
    localCategoryIds.push(localCategoryId);
    await pool.query(
      `INSERT INTO product_category_relations (
        product_id,
        category_id
      )
      VALUES ($1, $2)
      ON CONFLICT (product_id, category_id)
      DO NOTHING`,
      [
        localProductId,
        localCategoryId
      ]
    );
  }
  if (localCategoryIds.length > 0) {
    await pool.query(
      `DELETE FROM product_category_relations
      WHERE product_id = $1
      AND category_id NOT IN (
        SELECT unnest($2::integer[])
      )`,
      [localProductId, localCategoryIds]
    );
  } else {
    await pool.query(
      `DELETE FROM product_category_relations
      WHERE product_id = $1`,
      [localProductId]
    );
  }
  return categories;
};

const syncImages = async (id) => {
  const productResult = await pool.query(
    `SELECT id
    FROM products
    WHERE woocommerce_id = $1`,
    [id]
  );

  if (productResult.rows.length === 0) { throw new Error(`Produkt WooCommerce ${id} nie istnieje w bazie`) }
  const localProductId = productResult.rows[0].id;
  const response = await axios.get(`${process.env.WC_URL}/wp-json/wc/v3/products/${id}`,
    {
      params: {
        consumer_key: process.env.WC_CONSUMER_KEY,
        consumer_secret: process.env.WC_CONSUMER_SECRET
      }
    }
  );

  const images = response.data.images || [];
  const imageIds = images.map((image) => image.id);
  for (let i = 0; i < images.length; i++) {
    const image = images[i];
    await pool.query(
      `INSERT INTO product_images (
        woocommerce_id,
        product_id,
        url,
        position,
        created_at,
        updated_at
      )
      VALUES ($1, $2, $3, $4, NOW(), NOW())
      ON CONFLICT (product_id, woocommerce_id)
      DO UPDATE SET
        product_id = EXCLUDED.product_id,
        url = EXCLUDED.url,
        position = EXCLUDED.position,
        updated_at = NOW()`,
      [
        image.id,
        localProductId,
        image.src,
        i
      ]
    );
  }
  if (imageIds.length > 0) {
    await pool.query(
      `DELETE FROM product_images
      WHERE product_id = $1
      AND woocommerce_id NOT IN (
        SELECT unnest($2::integer[])
      )`,
      [localProductId, imageIds]
    );
  } else {
    await pool.query(
      `DELETE FROM product_images
      WHERE product_id = $1`,
      [localProductId]
    );
  }
  return images;
};

router.get("/sync/:id", async (req, res) => {
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

router.get("/sync/:id/variations", async (req, res) => {
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

router.get("/sync/:id/categories", async (req, res) => {
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

router.get("/sync/:id/images", async (req, res) => {
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

router.get("/sync/:id/full", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await syncProduct(id);
    const variations = await syncVariations(id);
    const categories = await syncCategories(id);
    const images = await syncImages(id);
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

router.get("/sync-all", async (req, res) => {
  try {
    const params = {
      consumer_key: process.env.WC_CONSUMER_KEY,
      consumer_secret: process.env.WC_CONSUMER_SECRET,
      per_page: 100,
      page: 1
    };

    const firstPage = await axios.get(`${process.env.WC_URL}/wp-json/wc/v3/products`, { params });
    const totalPages = Number(firstPage.headers["x-wp-totalpages"]);
    let products = [...firstPage.data];
    for (let page = 2; page <= totalPages; page++) {
      const response = await axiosWithRetry(`${process.env.WC_URL}/wp-json/wc/v3/products`,
        {
          params: {
            ...params,
            page
          }
        }
      );
      products.push(...response.data);
    }

    const results = {
      total: products.length,
      synchronized: 0,
      failed: 0,
      errors: []
    };

    for (const product of products) {
      try {
        await syncProduct(product.id);
        await syncVariations(product.id);
        await syncCategories(product.id);
        await syncImages(product.id);
        results.synchronized++;
        console.log(`✓ Zsynchronizowano produkt ${product.id}: ${product.name}`);
      } catch (error) {
        results.failed++;
        results.errors.push({
          woocommerce_id: product.id,
          name: product.name,
          error: error.message
        });
        console.error(`✗ Błąd produktu ${product.id}:`, error.message);
      }
    }

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
      error: error.response?.data || error.message
    });
  }
});

module.exports = router;