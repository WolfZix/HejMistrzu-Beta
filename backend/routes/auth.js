const express = require("express");
const router = express.Router();
const pool = require("../src/config/db");
const bcrypt = require("bcrypt");

router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const existingUser = await pool.query("SELECT id FROM users WHERE email = $1", [email]);

    if (existingUser.rows.length > 0) {
      return res.status(400).json({
        success: false,
        message: "Użytkownik z takim adresem email już istnieje",
      });
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await pool.query(
      `INSERT INTO users (username, email, password_hash)
       VALUES ($1, $2, $3)
       RETURNING *`,
      [username, email, hashedPassword]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Nie udało się utworzyć użytkownika",
    });
  }
});

module.exports = router;