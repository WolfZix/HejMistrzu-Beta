require("dotenv").config();
const axios = require("axios");
const express = require("express");
const router = express.Router();
const {
  syncProduct,
  syncVariations,
  syncCategories,
  syncImages,
  syncFullProduct,
  syncAllProducts,
  getLastSync,
  updateLastSync,
  syncChangedProducts,
} = require("../services/syncProducts");

router.get("/", async (_req, res) => {
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

router.get("/sync-all", async (_req, res) => {
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
      error: error.response?.data || error.message
    });
  }
});

router.get("/sync-changed", async (_req, res) => {
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
      error: error.response?.data || error.message
    });
  }
});

module.exports = router;