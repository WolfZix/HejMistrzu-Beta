require("dotenv").config();
const axios = require("axios");
const express = require("express");
const router = express.Router();

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

module.exports = router;