const express = require("express");
const nodemailer = require("nodemailer");
const contactHtml = require("../services/contactHtml");

const router = express.Router();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
});

function validateContactForm({ fullName, email, subject, message }) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (typeof fullName !== "string" || typeof email !== "string" || typeof subject !== "string" || typeof message !== "string") return "Nieprawidłowe dane";
  if (!fullName || !email || !subject || !message) return "Wszystkie pola są wymagane";
  if (fullName.trim() === "" || email.trim() === "" || subject.trim() === "" || message.trim() === "") return "Wszystkie pola są wymagane";
  if (fullName.trim().length > 100) return "Imię i nazwisko jest za długie"
  if (email.trim().length > 254) return "Email jest za długi"
  if (subject.trim().length > 200) return "Temat jest za długi"
  if (message.trim().length > 5000) return "Wiadomość jest za długa"
  if (!emailRegex.test(email.trim())) return "Nieprawidłowy adres email"
  return null
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

router.post("/", async (req, res) => {
  const { fullName, email, subject, message } = req.body;
  const validationError = validateContactForm({ fullName, email, subject, message });
  if (validationError) {
    return res.status(400).json({
      success: false,
      message: validationError,
    });
  }
  try {
    const safeFullName = escapeHtml(fullName);
    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message);

    await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: process.env.MAIL_USER,
      replyTo: email,
      subject: `📩 ${subject}`,
      html: contactHtml(safeFullName, safeEmail, safeSubject, safeMessage),
    });

    res.json({
      success: true,
      message: "Mail wysłany",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Nie udało się wysłać maila",
    });
  }
});

module.exports = router;