const express = require("express");
const router = express.Router();
const pool = require("../config/db");
const verifyToken = require("../middleware/verifyToken");
const requireAdmin = require("../middleware/requireAdmin");

const mapRegistration = (registration) => ({
  id: registration.id,
  eventId: registration.event_id,
  name: registration.name,
  surname: registration.surname,
  email: registration.email,
  pokemonId: registration.pokemon_id,
  nickname: registration.nickname,
  slots: registration.slots,
});

function validateRegistration({name, surname, email, slots}) {
  if (
    !name ||
    !surname ||
    !email ||
    name.trim() === "" ||
    surname.trim() === "" ||
    email.trim() === "" ||
    !Number.isInteger(Number(slots)) ||
    Number(slots) < 1
  ) return false;
  return true;
}

async function doesEventExist(eventId) {
  const result = await pool.query(`SELECT id FROM events WHERE id = $1`, [eventId]);
  return result.rowCount > 0;
}

async function getFreeSlots(eventId) {
  const result = await pool.query(`
      SELECT events.max_slots - COALESCE(SUM(event_registrations.slots), 0) AS free_slots
      FROM events
      LEFT JOIN event_registrations ON event_registrations.event_id = events.id
      WHERE events.id = $1
      GROUP BY events.id, events.max_slots;
      `, [eventId])
  if (result.rowCount === 0) return null;
  return Number(result.rows[0].free_slots);
}

router.get("/", verifyToken, requireAdmin, async (req, res) => {
  try {
    const result = await pool.query(`SELECT * FROM event_registrations`);
    const registrations = result.rows.map(mapRegistration)
    res.json(registrations);
  } catch (error) {
    console.error(error);
  }
})

router.post("/", async (req, res) => {
  const { eventId, name, surname, email, pokemonId, nickname, slots } = req.body;
  try {
    if (!(await doesEventExist(eventId))) return res.status(404).json({ message: "Nie znaleziono takiego wydarzenia" })
    if (!validateRegistration({ name, surname, email, slots })) return res.status(400).json({ message: "Wprowadzono niepoprawne dane" })
    const freeSlots = await getFreeSlots(eventId);
    if (slots > freeSlots) return res.status(409).json({ message: `Brakuje wolnych miejsc. Wolne miejsca: ${freeSlots}`});

    const result = await pool.query(`
      INSERT INTO event_registrations(event_id, name, surname, email, pokemon_id, nickname, slots)
      VALUES($1, $2, $3, $4, $5, $6, $7)
      RETURNING *
      `, [eventId, name, surname, email, pokemonId, nickname, slots]);
    res.status(201).json(mapRegistration(result.rows[0]));
  } catch(error) {
    console.error(error);
    res.status(500).json({ message: "Nie udało się utworzyć zapisu" })
  }
})

module.exports = router;