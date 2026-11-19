const axios = require("axios");
const p24 = axios.create({
  baseURL: process.env.P24_BASE_URL || "https://sandbox.przelewy24.pl/api/v1",
  auth: {
    username: process.env.P24_POS_ID,
    password: process.env.P24_API_KEY,
  },
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 15000,
});

module.exports = p24;
