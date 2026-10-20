const axios = require("axios");

const woocommerce = axios.create({
  baseURL: `${process.env.WC_URL}/wp-json/wc/v3`,
  params: {
    consumer_key: process.env.WC_CONSUMER_KEY,
    consumer_secret: process.env.WC_CONSUMER_SECRET,
  },
  timeout: 15000,
});

module.exports = woocommerce;
