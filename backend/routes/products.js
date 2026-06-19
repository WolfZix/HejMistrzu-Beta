require("dotenv").config();
const axios = require("axios");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    console.log(process.env.WC_CONSUMER_KEY.slice(0,10));
    console.log(process.env.WC_CONSUMER_SECRET.slice(0,10));
    const response = await axios.get(`${process.env.WC_URL}/wp-json/wc/v3/products`,
    {
      params: {
        consumer_key: process.env.WC_CONSUMER_KEY,
        consumer_secret: process.env.WC_CONSUMER_SECRET,
      },
    }
  );
  res.json(response.data);
  } catch (error) {
    console.error(error.response?.data);
    res.status(500).json({
      success: false,
      message: "Nie udało się pobrać produktów",
    });
  }
});

router.get("/test", async (req, res) => {
  res.json({
    keyExist: !!process.env.WC_CONSUMER_KEY,
    secretExist: !!process.env.WC_CONSUMER_SECRET,
  });
});

module.exports = router;