const express = require("express");
const router = express.Router();
const pool = require("../config/db");
const verifyToken = require("../middleware/verifyToken");
const requireAdmin = require("../middleware/requireAdmin");
const bcrypt = require("bcrypt");

router.get("/", verifyToken, requireAdmin, async (req, res) => {
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

router.post("/", verifyToken, requireAdmin, async (req, res) => {
  try {
    const { name, surname, username, email, password, role = "user" } =
      req.body;

    if (
      !name?.trim() ||
      !surname?.trim() ||
      !username?.trim() ||
      !email?.trim() ||
      !password?.trim()
    ) {
      return res.status(400).json({
        success: false,
        message: "Wszystkie pola są wymagane",
      });
    }

    if (!["user", "admin"].includes(role)) {
      return res.status(400).json({
        success: false,
        message: "Nieprawidłowa rola użytkownika",
      });
    }

    const normalizedEmail = email.trim().toLowerCase();
    const normalizedUsername = username.trim();

    const existingUser = await pool.query(
      "SELECT id FROM users WHERE LOWER(email) = LOWER($1)",
      [normalizedEmail]
    );

    if (existingUser.rows.length > 0) {
      return res.status(409).json({
        success: false,
        message: "Użytkownik z takim adresem email już istnieje",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await pool.query(
      `INSERT INTO users (name, surname, username, email, password_hash, role)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING id, username, email, name, surname, role, created_at`,
      [
        name.trim(),
        surname.trim(),
        normalizedUsername,
        normalizedEmail,
        hashedPassword,
        role,
      ]
    );

    return res.status(201).json({
      success: true,
      user: result.rows[0],
    });
  } catch (error) {
    console.error("Błąd tworzenia użytkownika:", error);

    return res.status(500).json({
      success: false,
      message: "Nie udało się utworzyć użytkownika",
    });
  }
});

module.exports = router;