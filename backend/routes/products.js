require("dotenv").config();
const axios = require("axios");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const page1 = await axios.get(
      `${process.env.WC_URL}/wp-json/wc/v3/products`,
      {
        params: {
          consumer_key: process.env.WC_CONSUMER_KEY,
          consumer_secret: process.env.WC_CONSUMER_SECRET,
          per_page: 100,
          page: 1,
        },
      }
    );
    const page2 = await axios.get(
      `${process.env.WC_URL}/wp-json/wc/v3/products`,
      {
        params: {
          consumer_key: process.env.WC_CONSUMER_KEY,
          consumer_secret: process.env.WC_CONSUMER_SECRET,
          per_page: 100,
          page: 2,
        },
      }
    );
    const page3 = await axios.get(
      `${process.env.WC_URL}/wp-json/wc/v3/products`,
      {
        params: {
          consumer_key: process.env.WC_CONSUMER_KEY,
          consumer_secret: process.env.WC_CONSUMER_SECRET,
          per_page: 100,
          page: 3,
        },
      }
    );
    const page4 = await axios.get(
      `${process.env.WC_URL}/wp-json/wc/v3/products`,
      {
        params: {
          consumer_key: process.env.WC_CONSUMER_KEY,
          consumer_secret: process.env.WC_CONSUMER_SECRET,
          per_page: 100,
          page: 4,
        },
      }
    );
    const page5 = await axios.get(
      `${process.env.WC_URL}/wp-json/wc/v3/products`,
      {
        params: {
          consumer_key: process.env.WC_CONSUMER_KEY,
          consumer_secret: process.env.WC_CONSUMER_SECRET,
          per_page: 100,
          page: 5,
        },
      }
    );

    const allProducts = [
      ...page1.data,
      ...page2.data,
      ...page3.data,
      ...page4.data,
      ...page5.data,
    ];

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

module.exports = router;