const express = require("express");
const router = express.Router();
const pool = require("../config/db");

const deliveryPrice = (deliveryMethod) => {
  return deliveryMethod === "InPost Paczkomat 24/7" ? 16.99
  : deliveryMethod === "InPost Paczkomat Pobranie" ? 20.66
  : deliveryMethod === "InPost Kurier" ? 19.99
  : deliveryMethod === "InPost Kurier Pobranie" ? 27.07
  : deliveryMethod === "Odbiór Osobisty" ? 0 : null
}

const validateOrder = (name, surname, email, phone, country, address, city, postalCode, deliveryMethod, paymentMethod, inPostPoint, items) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const postalCodeRegex = /^\d{2}-\d{3}$/;
    const phoneRegex = /^\d{3} \d{3} \d{3}$/;

    if (!name || !surname || !email || !phone || !country || !address || !city || !postalCode) return false;
    if (!deliveryMethod || !paymentMethod) return false;
    if (
      deliveryMethod !== "InPost Kurier" &&
      deliveryMethod !== "InPost Kurier Pobranie" &&
      deliveryMethod !== "Odbiór Osobisty" &&
      !inPostPoint
    ) return false;
    if 
    ((
      deliveryMethod === "InPost Paczkomat 24/7" ||
      deliveryMethod === "InPost Kurier"
    ) &&
      paymentMethod === "Płatność przy odbiorze"
    ) return false;
    if (!emailRegex.test(email)) return false;
    if (!phoneRegex.test(phone))  return false;
    if (!postalCodeRegex.test(postalCode)) return false;
    if (
      deliveryMethod !== "InPost Paczkomat 24/7" &&
      deliveryMethod !== "InPost Kurier" &&
      deliveryMethod !== "InPost Paczkomat Pobranie" &&
      deliveryMethod !== "InPost Kurier Pobranie" &&
      deliveryMethod !== "Odbiór Osobisty"
    ) return false;
    if (
      paymentMethod !== "Przelewy24" &&
      paymentMethod !== "Karta Kredytowa" &&
      paymentMethod !== "Google Pay" &&
      paymentMethod !== "BLIK" &&
      paymentMethod !== "Płatność przy odbiorze"
    ) return false;
    if (name.length > 50) return false;
    if (surname.length > 50) return false;
    if (email.length > 254) return false;
    if (country.length > 100) return false;
    if (address.length > 150) return false;
    if (city.length > 100) return false;
    if (!Array.isArray(items) || items.length === 0) return false;
    return true;
  };

router.post("/", async (req, res) => {
  const {
    name,
    surname,
    email,
    phone,
    country,
    address,
    city,
    postalCode,
    deliveryMethod,
    paymentMethod,
    inPostPoint,
    items,
  } = req.body;
  
  const isValid = validateOrder(
    name,
    surname,
    email,
    phone,
    country,
    address,
    city,
    postalCode,
    deliveryMethod,
    paymentMethod,
    inPostPoint,
    items
  );
  
  if (!isValid) {
    return res.status(400).json({
      message: "Nieprawidłowe dane zamówienia"
    });
  }
  
  const shippingPrice = deliveryPrice(deliveryMethod);
  let subtotal = 0;

  for (const item of items) {
    const product = await pool.query(
      "SELECT id, woocommerce_id, name, price, stock_quantity, stock_status FROM products WHERE woocommerce_id = $1",
      [item.id]
    );
    if (product.rows.length === 0) return res.status(400).json({
      message: `Produkt ${item.id} nie istnieje w bazie danych`
    });
    if (
      typeof item.quantity !== "number" ||
      !Number.isInteger(item.quantity) ||
      item.quantity <= 0
    ) {
      return res.status(400).json({
        message: "Nieprawidłowa ilość produktu"
      });
    }
    if (product.rows[0].stock_quantity < item.quantity) return res.status(400).json({
      message: "Niewystarczająca ilość produktu na stanie magazynowym sklepu"
    });
    subtotal += Number(product.rows[0].price) * item.quantity;
  }
  const total = subtotal + shippingPrice;
  const inPostPointName = inPostPoint === null ? null : inPostPoint.name;
  const inPostPointAddress = inPostPoint === null ? null : inPostPoint.address;
  const inPostPointCity = inPostPoint === null ? null : inPostPoint.city;
  const inPostPointPostalCode = inPostPoint === null ? null : inPostPoint.postalCode;

  const dbUser = await pool.query("SELECT current_user, current_database()");
  console.log("Backend DB:", dbUser.rows[0]);

  const order = await pool.query(
  `
    INSERT INTO orders (
      customer_name,
      customer_surname,
      email,
      phone,
      country,
      address,
      city,
      postal_code,
      delivery_method,
      payment_method,
      inpost_point_name,
      inpost_point_address,
      inpost_point_city,
      inpost_point_postal_code,
      subtotal,
      shipping_price,
      total
    )
    VALUES (
      $1, $2, $3, $4, $5, $6, $7, $8, $9,
      $10, $11, $12, $13, $14, $15, $16, $17
    )
    RETURNING id
  `,
  [
    name, surname, email, phone, country, address, city, postalCode, deliveryMethod, paymentMethod, 
    inPostPointName, inPostPointAddress, inPostPointCity, inPostPointPostalCode, subtotal, shippingPrice, total
  ]
);

  console.log("Utworzono zamówienie:", order.rows[0]);
  res.status(201).json({
    message: "Zamówienie otrzymane",
  });
});

module.exports = router;