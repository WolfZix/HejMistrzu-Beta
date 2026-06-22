const express = require("express");
const router = express.Router();
const pool = require("../src/config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const verifyToken = require("../middleware/verifyToken");

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

router.post("/login", async (req,res) => {
  try {
    const { email, password } = req.body;
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    if (result.rows.length === 0) {
      return res.status(401).json({
        success: false,
        message: "Nieprawidłowy email lub hasło",
      });
    }
    const user = result.rows[0];
    const isPasswordValid = await bcrypt.compare(password,user.password_hash);
    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Nieprawidłowe hasło",
      });
    }
    const token = jwt.sign(
      {
        id: user.id,
        username: user.username,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );
    res.json({
      success: true,
      token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Błąd serwera",
    });
  }
});

router.get("/me", verifyToken, async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT id, username, email, role FROM users WHERE id = $1`,
      [req.user.id]
    );

    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Błąd serwera",
    });
  }
});

module.exports = router;