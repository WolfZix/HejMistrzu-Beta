const express = require("express");
const router = express.Router();

const pool = require("../config/db");
const verifyToken = require("../middleware/verifyToken");

router.get("/me", verifyToken, async (req, res) => {
  try {
    const userId = req.user.id;
    const result = await pool.query(`
      SELECT
      COALESCE(SUM(points), 0) AS total_points,
      COUNT(*) AS transactions_count
      FROM battlepass_points
      WHERE user_id = $1`,
      [userId]
    );

    res.json({
      totalPoints: Number(result.rows[0].total_points),
      transactionsCount: Number(result.rows[0].transactions_count),
    });
  } catch (error) {
    console.error("Błąd pobierania postępu Battle Pass:", error);
    res.status(500).json({
      message: "Nie udało się pobrać postępu Battle Pass",
    });
  }
});

module.exports = router;