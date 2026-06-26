const express = require("express");
const router = express.Router();

const crypto = require("crypto");
let reservations = [];

router.get("/", (req, res) => {
  res.json({
    rezerwacje: reservations,
    message: `Rezerwacje: ${reservations}`
  })
})

router.post("/", (req, res) => {
  const { eventId, firstName, lastName, pokemonId, email, slots } = req.body;
  if (!eventId) {
    return res.status(400).json({
      success: false,
      message: "Niepoprawne eventId"
    })
  }
  if (!firstName) {
    return res.status(400).json({
      success: false,
      message: "Niepoprawne imie"
    })
  }
  if (!lastName) {
    return res.status(400).json({
      success: false,
      message: "Niepoprawne nazwisko"
    })
  }
  if (!pokemonId) {
    return res.status(400).json({
      success: false,
      message: "Niepoprawne pokemonId"
    })
  }
  if (!email) {
    return res.status(400).json({
      success: false,
      message: "Niepoprawny email"
    })
  }
  if (!slots) {
    return res.status(400).json({
      success: false,
      message: "Niepoprawna ilość miejsc"
    })
  }

  const reservation = {
  id: crypto.randomUUID(),
  eventId,
  firstName,
  lastName,
  pokemonId,
  email,
  slots,
  }

  reservations.push(reservation);
  res.status(200).json({
    success: true,
    message: "Rezerwacja dodana pomyślnie :)",
  })
})

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  reservations = reservations.filter(
    reservation => reservation.id !== id
  )
  res.json({
    success: true,
    message: "DELETE dziala",
  })
})

module.exports = router;