const express = require("express");
const router = express.Router();

const validateOrder = (name, surname, email, phone, country, address, city, postalCode, deliveryMethod, paymentMethod, inPostPoint) => {
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
    return true;
  };

router.post("/", (req, res) => {
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
    inPostPoint
  );
  if (!isValid) {
    return res.status(400).json({
      message: "Nieprawidłowe dane zamówienia"
    });
  } else {
    res.status(201).json({
      message: "Zamówienie otrzymane",
    });
  }
});

module.exports = router;