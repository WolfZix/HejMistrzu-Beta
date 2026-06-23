const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const response = await axios.get(
      `${process.env.WC_URL}/wp-json/wc/v3/products/categories`,
      {
        params: {
          consumer_key: process.env.WC_CONSUMER_KEY,
          consumer_secret: process.env.WC_CONSUMER_SECRET,
          per_page: 100,
        },
      }
    );

    const categories = response.data
    .filter(category => category.id !== 34)
    .map((category) => ({
      id: category.id,
      name: category.name,
      parent: category.parent,
      count: category.count,
    }));

    res.json(categories);
  } catch (error) {
    console.error(error.response?.data || error.message);

    res.status(500).json({
      success: false,
      message: "Nie udało się pobrać kategorii",
    });
  }
});

module.exports = router;