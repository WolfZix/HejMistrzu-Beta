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

router.get("/claims", verifyToken, async (req, res) => {
  try {
    const userId = req.user.id;
    const result = await pool.query(`
      SELECT reward_level, claimed_at
      FROM battlepass_claims
      WHERE user_id = $1
      ORDER BY reward_level ASC`,
      [userId]
    );

    res.json(result.rows);
  } catch (error) {
    console.error("Błąd pobierania odebranych nagród:", error);
    res.status(500).json({
      message: "Nie udało się pobrać odebranych nagród",
    });
  }
});

router.post("/claims", verifyToken, async (req, res) => {
  try {
    const userId = req.user.id;
    const { rewardLevel } = req.body;
    if (!Number.isInteger(rewardLevel) || rewardLevel < 1) {
      return res.status(400).json({
        message: "Nieprawidłowy poziom nagrody",
      });
    }

    const result = await pool.query(`
      SELECT COALESCE(SUM(points), 0) AS total_points
      FROM battlepass_points
      WHERE user_id = $1`,
      [userId]
    );

    const totalPoints = Number(result.rows[0].total_points);
    if (totalPoints < rewardLevel * 10) {
      return res.status(403).json({
        message: "Nie osiągnięto wymaganego progu punktowego",
      });
    }

    const claim = await pool.query(`
      INSERT INTO battlepass_claims (user_id, reward_level)
      VALUES ($1, $2)
      ON CONFLICT (user_id, reward_level) DO NOTHING
      RETURNING *`,
      [userId, rewardLevel]
    );

    if (claim.rowCount === 0) {
      return res.status(409).json({
        message: "Ta nagroda została już odebrana",
      });
    }

    res.status(201).json({
      message: "Nagroda została odebrana",
      claim: claim.rows[0],
    });
  } catch (error) {
    console.error("Błąd odbierania nagrody:", error);
    res.status(500).json({
      message: "Nie udało się odebrać nagrody",
    });
  }
});

module.exports = router;