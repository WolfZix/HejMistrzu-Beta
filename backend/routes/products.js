require("dotenv").config();
const axios = require("axios");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const response = await axios.get(
      `${process.env.WC_URL}/wp-json/wc/v3/products`,
      {
        params: {
          consumer_key: process.env.WC_CONSUMER_KEY,
          consumer_secret: process.env.WC_CONSUMER_SECRET,
          per_page: 100,
        },
      }
    );

    const products = response.data.map(product => ({
      id: product.id,
      name: product.name,
      price: Number(product.price),
      categories: product.categories.map(category => ({
        id: category.id,
        name: category.name,
      })),
      image: product.images?.[0]?.src || "",
      inStock: product.stock_status === "instock",
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