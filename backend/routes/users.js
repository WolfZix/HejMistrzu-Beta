const express = require("express");
const router = express.Router();
const pool = require("../config/db");

router.get("/", async (req, res) => {
  try {
    const { email } = req.query;
    let query = `
      SELECT
        id,
        username,
        email,
        name,
        surname,
        role,
        created_at
      FROM users
    `;

    const values = [];
    if (email) {
      query += ` WHERE email ILIKE $1`;
      values.push(`%${email}%`);
    }

    query += ` ORDER BY id ASC`;
    const result = await pool.query(query, values);

    const users = result.rows.map((user) => ({
      id: user.id,
      username: user.username,
      email: user.email,
      name: user.name,
      surname: user.surname,
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