const express = require("express");
const router = express.Router();
const pool = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const verifyToken = require("../middleware/verifyToken");

function validateRegistration({ name, surname, username, email, password }) {
  if (
    !name || !surname ||
    !username || !email ||
    !password
  ) {
    return "Wszystkie pola są wymagane";
  }

  if (
    name.trim() === "" ||
    surname.trim() === "" ||
    username.trim() === "" ||
    email.trim() === "" ||
    password.trim() === ""
  ) {
    return "Wszystkie pola są wymagane";
  }
  return null;
}

router.post("/register", async (req, res) => {
  try {
    const { name, surname, username, email, password } = req.body;
    const validationError = validateRegistration({ name, surname, username, email, password });
    if (validationError) {
      return res.status(400).json({
        success: false,
        message: validationError,
      });
    }
    
    const existingUser = await pool.query("SELECT id FROM users WHERE email = $1", [email]);

    if (existingUser.rows.length > 0) {
      return res.status(400).json({
        success: false,
        message: "Użytkownik z takim adresem email już istnieje",
      });
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await pool.query(
      `INSERT INTO users (name, surname, username, email, password_hash)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *`,
      [name, surname, username, email, hashedPassword]
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
        createdAt: user.createdAt,
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
    const result = await pool.query(`
      SELECT
      id,
      username,
      email,
      name,
      surname,
      company_name AS "companyName",
      nip,
      phone,
      country,
      city,
      postal_code AS "postalCode",
      address,
      default_payment_method AS "defaultPaymentMethod",
      default_delivery_method AS "defaultDeliveryMethod",
      default_inpost_point AS "defaultInpostPoint",
      role,
      created_at AS "createdAt"
      FROM users
      WHERE id = $1
    `,[req.user.id]);

    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Błąd serwera",
    });
  }
});

router.put("/profile", verifyToken, async (req, res) => {
  try {
    const {
      name,
      surname,
      companyName,
      nip,
      phone,
      country,
      city,
      postalCode,
      address,
      defaultPaymentMethod,
      defaultDeliveryMethod,
      defaultInpostPoint,
    } = req.body;

    const fields = { name: 100, surname: 100, companyName: 100, nip: 20, phone: 30, country: 100, city: 100, postalCode: 20, address: 255 };

    for (const [field, maxLength] of Object.entries(fields)) {
      const value = req.body[field];

      if ( value !== undefined && (typeof value !== "string" || value.trim().length > maxLength)) {
        return res.status(400).json({
          message: `Nieprawidłowa wartość pola: ${field}`,
        });
      }
    }

    const paymentMethods = ["p24", "card", "google_pay", "blik", "cod"];
    const deliveryMethods = ["inpost_locker", "inpost_courier", "local_pickup"];

    if (
      defaultPaymentMethod !== undefined &&
      defaultPaymentMethod !== null &&
      defaultPaymentMethod !== "" &&
      !paymentMethods.includes(defaultPaymentMethod)
    ) {
      return res.status(400).json({
        message: "Nieprawidłowa metoda płatności",
      });
    }

    if (
      defaultDeliveryMethod !== undefined &&
      defaultDeliveryMethod !== null &&
      defaultDeliveryMethod !== "" &&
      !deliveryMethods.includes(defaultDeliveryMethod)
    ) {
      return res.status(400).json({
        message: "Nieprawidłowa metoda dostawy",
      });
    }

    const result = await pool.query(`
      UPDATE users SET
        name = COALESCE($1, name),
        surname = COALESCE($2, surname),
        company_name = COALESCE($3, company_name),
        nip = COALESCE($4, nip),
        phone = COALESCE($5, phone),
        country = COALESCE($6, country),
        city = COALESCE($7, city),
        postal_code = COALESCE($8, postal_code),
        address = COALESCE($9, address),
        default_payment_method = $10,
        default_delivery_method = $11,
        default_inpost_point = $12
      WHERE id = $13
      RETURNING
        id, username, email, name, surname, phone,
        country, city, postal_code AS "postalCode",
        address,
        default_payment_method AS "defaultPaymentMethod",
        default_delivery_method AS "defaultDeliveryMethod",
        default_inpost_point AS "defaultInpostPoint"`,
      [
        name ?? null,
        surname ?? null,
        companyName ?? null,
        nip ?? null,
        phone ?? null,
        country ?? null,
        city ?? null,
        postalCode ?? null,
        address ?? null,
        defaultPaymentMethod || null,
        defaultDeliveryMethod || null,
        defaultInpostPoint ?? null,
        req.user.id,
      ]
    );

    if (!result.rows.length) {
      return res.status(404).json({
        message: "Nie znaleziono użytkownika",
      });
    }

    res.json({
      success: true,
      message: "Profil został zaktualizowany",
      user: result.rows[0],
    });
  } catch (error) {
    console.error("Błąd aktualizacji profilu:", error);

    res.status(500).json({
      success: false,
      message: "Nie udało się zaktualizować profilu",
    });
  }
});

module.exports = router;