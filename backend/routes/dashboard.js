const express = require("express");
const router = express.Router();
const pool = require("../db");

router.get("/shop", async (req, res) => {
  try {
    const orderStats = await pool.query(`
      SELECT 
        COUNT(*) FILTER (WHERE created_at >= date_trunc('month', CURRENT_DATE)) AS orders_this_month,
        COUNT(*) FILTER (WHERE created_at >= date_trunc('year', CURRENT_DATE)) AS orders_this_year
      FROM orders
      WHERE status IN ('COMPLETED', 'PAID')
    `);
    const productRanking = await pool.query(`
      SELECT
        oi.product_name AS name,
        SUM(oi.quantity)::INTEGER AS quantity
      FROM order_items oi
      JOIN orders o ON o.id = oi.order_id
      WHERE o.status IN ('COMPLETED', 'PAID')
      GROUP BY oi.product_name
      ORDER BY quantity DESC
      LIMIT 5
    `);

    res.json({
      ordersThisMonth: Number(orderStats.rows[0].orders_this_month),
      ordersThisYear: Number(orderStats.rows[0].orders_this_year),
      topProduct: productRanking.rows[0]?.name || "Brak danych",
      ranking: productRanking.rows,
    });
  } catch (error) {
    console.error("Błąd pobierania statystyk sklepu:", error);
    res.status(500).json({ error: "Błąd pobierania statystyk sklepu" });
  }
});

module.exports = router;