const express = require("express");
const router = express.Router();
const pool = require("../src/config/db");

router.get("/", async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT
        id,
        username,
        email,
        role,
        created_at
      FROM users
      ORDER BY id ASC
    `);

    const users = result.rows.map((user) => ({
      id: user.id,
      username: user.username,
      email: user.email,
      role: user.role,
      createdAt: user.created_at,
    }));

    res.json(users);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Nie udało się pobrać użytkowników",
    });
  }
});

module.exports = router;