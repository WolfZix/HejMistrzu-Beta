const express = require("express");
const router = express.Router();
const pool = require("../config/db");
const verifyToken = require("../middleware/verifyToken");
const requireAdmin = require("../middleware/requireAdmin");

router.get("/shop", verifyToken, requireAdmin, async (_req, res) => {
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

router.get("/battlepass", verifyToken, requireAdmin, async (_req, res) => {
  try {
    const stats = await pool.query(`
      SELECT
        COALESCE(MAX(FLOOR(total_points / 10)), 0) AS highest_level,
        COALESCE(ROUND(AVG(FLOOR(total_points / 10))), 0) AS average_level
      FROM (
        SELECT user_id, SUM(points) AS total_points
        FROM battlepass_points
        GROUP BY user_id
      ) user_points
    `);

    const ranking = await pool.query(`
      SELECT
        u.username AS name,
        FLOOR(SUM(bp.points) / 10)::INTEGER AS level
      FROM battlepass_points bp
      JOIN users u ON u.id = bp.user_id
      GROUP BY u.id, u.username
      ORDER BY SUM(bp.points) DESC
      LIMIT 5
    `);

    res.json({
      highestLevel: Number(stats.rows[0].highest_level),
      averageLevel: Number(stats.rows[0].average_level),
      ranking: ranking.rows,
    });
  } catch (error) {
    console.error("Błąd pobierania statystyk Battle Passa:", error);
    res.status(500).json({
      error: "Błąd pobierania statystyk Battle Passa",
    });
  }
});

router.get("/reservations", verifyToken, requireAdmin, async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT
        COUNT(*) FILTER (
          WHERE reservation_date >= date_trunc('month', CURRENT_DATE)::DATE
          AND reservation_date < (date_trunc('month', CURRENT_DATE) + INTERVAL '1 month')::DATE
        ) AS reservations_this_month,

        COUNT(*) FILTER (
          WHERE reservation_date >= date_trunc('year', CURRENT_DATE)::DATE
          AND reservation_date < (date_trunc('year', CURRENT_DATE) + INTERVAL '1 year')::DATE
        ) AS reservations_this_year,

        COUNT(*) FILTER (WHERE status = 'Oczekująca') AS active_reservations

      FROM reservations
    `);

    res.json({
      reservationsThisMonth: Number(result.rows[0].reservations_this_month),
      reservationsThisYear: Number(result.rows[0].reservations_this_year),
      activeReservations: Number(result.rows[0].active_reservations),
    });
  } catch (error) {
    console.error("Błąd pobierania statystyk rezerwacji:", error);
    res.status(500).json({
      error: "Błąd pobierania statystyk rezerwacji",
    });
  }
});

module.exports = router;