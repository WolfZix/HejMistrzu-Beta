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

router.patch("/:id", verifyToken, requireAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const { name, surname, username, email, password, role } = req.body;

    if (!/^\d+$/.test(id)) {
      return res.status(400).json({
        success: false,
        message: "Nieprawidłowe ID użytkownika",
      });
    }

    if (id === "1") {
      return res.status(403).json({
        success: false,
        message: "Nie można edytować tego użytkownika",
      });
    }

    const allowedFields = [
      "name",
      "surname",
      "username",
      "email",
      "password",
      "role",
    ];

    const providedFields = allowedFields.filter((field) =>
      Object.prototype.hasOwnProperty.call(req.body, field)
    );

    if (providedFields.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Nie podano żadnych pól do aktualizacji",
      });
    }

    const existingUser = await pool.query("SELECT id FROM users WHERE id = $1",[id]);
    if (existingUser.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Nie znaleziono użytkownika",
      });
    }

    const updates = [];
    const values = [];
    const addUpdate = (column, value) => {
      values.push(value);
      updates.push(`${column} = $${values.length}`);
    };

    if (providedFields.includes("name")) {
      if (typeof name !== "string" || !name.trim()) {
        return res.status(400).json({
          success: false,
          message: "Imię nie może być puste",
        });
      }
      addUpdate("name", name.trim());
    }

    if (providedFields.includes("surname")) {
      if (typeof surname !== "string" || !surname.trim()) {
        return res.status(400).json({
          success: false,
          message: "Nazwisko nie może być puste",
        });
      }
      addUpdate("surname", surname.trim());
    }

    if (providedFields.includes("username")) {
      if (typeof username !== "string" || !username.trim()) {
        return res.status(400).json({
          success: false,
          message: "Nazwa użytkownika nie może być pusta",
        });
      }
      addUpdate("username", username.trim());
    }

    if (providedFields.includes("email")) {
      if (typeof email !== "string" || !email.trim()) {
        return res.status(400).json({
          success: false,
          message: "Email nie może być pusty",
        });
      }

      const normalizedEmail = email.trim().toLowerCase();
      const emailCheck = await pool.query(
        `SELECT id FROM users WHERE LOWER(email) = LOWER($1) AND id <> $2`,
        [normalizedEmail, id]
      );

      if (emailCheck.rows.length > 0) {
        return res.status(409).json({
          success: false,
          message: "Użytkownik z takim adresem email już istnieje",
        });
      }
      addUpdate("email", normalizedEmail);
    }

    if (providedFields.includes("role")) {
      if (!["user", "admin"].includes(role)) {
        return res.status(400).json({
          success: false,
          message: "Nieprawidłowa rola użytkownika",
        });
      }
      addUpdate("role", role);
    }

    if (providedFields.includes("password")) {
      if (typeof password !== "string" || !password.trim()) {
        return res.status(400).json({
          success: false,
          message: "Hasło nie może być puste",
        });
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      addUpdate("password_hash", hashedPassword);
    }

    if (updates.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Nie podano poprawnych danych do aktualizacji",
      });
    }

    values.push(id);

    const query = `
      UPDATE users
      SET ${updates.join(", ")}
      WHERE id = $${values.length}
      RETURNING id, username, email, name, surname, role, created_at
    `;

    const result = await pool.query(query, values);
    return res.json({
      success: true,
      user: result.rows[0],
    });
  } catch (error) {
    console.error("Błąd edycji użytkownika:", error);
    return res.status(500).json({
      success: false,
      message: "Nie udało się zaktualizować użytkownika",
    });
  }
});

router.delete("/:id", verifyToken, requireAdmin, async (req, res) => {
  try {
    const { id } = req.params;

    if (!/^\d+$/.test(id)) {
      return res.status(400).json({
        success: false,
        message: "Nieprawidłowe ID użytkownika",
      });
    }

    if (id === "1") {
      return res.status(403).json({
        success: false,
        message: "Nie można usunąć tego użytkownika",
      });
    }

    const result = await pool.query(
      `DELETE FROM users WHERE id = $1 RETURNING id, username, email`,
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Nie znaleziono użytkownika",
      });
    }

    return res.json({
      success: true,
      message: "Użytkownik został usunięty",
      user: result.rows[0],
    });
  } catch (error) {
    console.error("Błąd usuwania użytkownika:", error);

    return res.status(500).json({
      success: false,
      message: "Nie udało się usunąć użytkownika",
    });
  }
});

module.exports = router;