const express = require("express");
const router = express.Router();
const pool = require("../src/config/db");

const validateReservation = ({
  fullName,
  email,
  phone,
  reservationType,
  reservationDate,
  reservationTime,
  duration,
  peopleCount,
  notes
}) => {
  if (
    !fullName ||
    !email ||
    !reservationType ||
    !reservationDate ||
    !reservationTime ||
    reservationType === "Sesja RPG" && !duration ||
    !peopleCount
  )  { return "Brakuje wymaganych pól" }

  if (
    reservationType !== "Gralnia" &&
    reservationType !== "Sesja RPG"
  ) { return "Wprowadzono niepoprawne dane" }

  if (
    reservationType === "Sesja RPG" &&
    duration !== "3 godziny" &&
    duration !== "5 godzin" &&
    duration !== "Bez limitu" &&
    duration !== null
  ) { return "Wprowadzono niepoprawne dane" }

  if (
    isNaN(Number(peopleCount)) ||
    Number(peopleCount) < 1 ||
    Number(peopleCount) > 4
  ) { return "Wprowadzono niepoprawne dane" }
  
  if (isNaN(Date.parse(reservationDate))) { return "Wprowadzono niepoprawne dane" }
  return null;
}

router.get("/", async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT id, user_id, full_name, email, phone, reservation_type, reservation_date, reservation_time, duration, status, payment_status, notes, created_at, updated_at
      FROM reservations
      ORDER BY reservation_date ASC, reservation_time ASC
      `)
    const reservations = result.rows.map((reservation) => ({
      id: reservation.id,
      userId: reservation.user_id,
      fullName: reservation.full_name,
      email: reservation.email,
      phone: reservation.phone,
      reservationType: reservation.reservation_type,
      reservationDate: reservation.reservation_date,
      reservationTime: reservation.reservation_time,
      duration: reservation.duration,
      status: reservation.status,
      paymentStatus: reservation.payment_status,
      notes: reservation.notes,
      createdAt: reservation.created_at,
      updatedAt: reservation.updated_at,
    }))
    res.json(reservations);
  } catch(error) {
    console.error(error)
    res.status(500).json({
      success: false,
      message: "Nie udało się pobrać rezerwacji",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (isNaN(Number(id))) {
      return res.status(400).json({
        success: false,
        message: "Niepoprawny numer rezerwacji",
      });
    }
    const result = await pool.query(`SELECT * FROM reservations WHERE id = $1`, [id])
    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Nie znaleziono rezerwacji",
      });
    }
    res.json(result.rows[0]);
  } catch(error) {
    console.error(error)
    res.status(500).json({
      success: false,
      message: "Nie udało się pobrać rezerwacji",
    });
  }
});

module.exports = router;