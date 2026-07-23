const express = require("express");
const router = express.Router();
const pool = require("../src/config/db");

const validateEvent = ({ title, description, category, eventDate, eventTime, maxSlots, price }) => {
  if (!title || !description || !category || !eventDate || !eventTime || !maxSlots || price == null) { return "Brakuje wymaganych pól" }
  if (isNaN(Number(maxSlots)) || Number(maxSlots) <= 0) { return "Wprowadzono niepoprawne dane" }
  if (isNaN(Number(price)) || Number(price) < 0 || Number(price) >= 9999) { return "Wprowadzono niepoprawne dane" }
  if (title.trim().length === 0) { return "Wprowadzono niepoprawne dane" }
  if (description.trim().length === 0) { return "Wprowadzono niepoprawne dane" }
  if (category.trim().length === 0) { return "Wprowadzono niepoprawne dane" }
  if (isNaN(Date.parse(eventDate))) { return "Wprowadzono niepoprawne dane" }
  return null;
};

router.get("/", async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT id, title, description, category, event_date, event_time, max_slots, price, created_at, updated_at
      FROM events
      ORDER BY event_date ASC, event_time ASC
      `);
      
      const events = result.rows.map((event) => ({
        id: event.id,
        title: event.title,
        description: event.description,
        category: event.category,
        eventDate: event.event_date,
        eventTime: event.event_time,
        maxSlots: event.max_slots,
        price: event.price,
        createdAt: event.created_at,
        updatedAt: event.updated_at,
      }));
      res.json(events);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Nie udało się pobrać wydarzeń",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (isNaN(Number(id))) {
      return res.status(400).json({
        success: false,
        message: "Niepoprawny numer wydarzenia",
      });
    }
    const result = await pool.query(`SELECT * FROM events WHERE id = $1`, [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Nie znaleziono wydarzenia",
      });
    }
    res.json(result.rows[0])
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Nie udało się pobrać tego wydarzenia",
    });
  }
});

router.post("/", async (req, res) => {
  const badRequest = (message) =>
    res.status(400).json({
      success: false,
      message,
    });
  try {
    const validationError = validateEvent(req.body);
    if (validationError) { return badRequest(validationError) }

    const { title, description, category, eventDate, eventTime, maxSlots, price } = req.body;
    const result = await pool.query(
      `INSERT INTO events
      (title, description, category, event_date, event_time, max_slots, price)
      VALUES ($1,$2,$3,$4,$5,$6,$7)
      RETURNING *`,
      [title, description, category, eventDate, eventTime, maxSlots, price]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Nie udało się stworzyć wydarzenia",
    });
  }
});

router.put("/:id", async (req, res) => {
  const badRequest = (message) =>
    res.status(400).json({
      success: false,
      message,
    });
  try {
    const { id } = req.params;
    if (isNaN(Number(id))) {
      return res.status(400).json({
        success: false,
        message: "Niepoprawne id",
      });
    }
    const existingEvent = await pool.query(`SELECT * FROM events WHERE id = $1`, [id]);
    if (existingEvent.rows.length === 0) { 
      return res.status(404).json({
        success: false,
        message: "Wydarzenie nie istnieje",
      });
    }
    const validationError = validateEvent(req.body);
    if (validationError) { return badRequest(validationError) }

    const { title, description, category, eventDate, eventTime, maxSlots, price } = req.body;
    const result = await pool.query(`
      UPDATE events
      SET title = $1, description = $2, category = $3, event_date = $4, event_time = $5, max_slots = $6, price = $7
      WHERE id = $8
      RETURNING *`,
      [title, description, category, eventDate, eventTime, maxSlots, price, id]
    );
    res.status(200).json(result.rows[0]);
  } catch(error) {
    res.status(500).json({
      success: false,
      message: "Nie udało się zedytować wydarzenia",
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (isNaN(Number(id))) {
      return res.status(400).json({
        success: false,
        message: "Niepoprawne id",
      });
    }
    const existingEvent = await pool.query(`SELECT * FROM events WHERE id = $1`, [id]);
    if (existingEvent.rows.length === 0) { 
      return res.status(404).json({
        success: false,
        message: "Wydarzenie nie istnieje",
      });
    }
    const result = await pool.query(`DELETE FROM events WHERE id = $1 RETURNING *`, [id]);
    res.status(200).json(result.rows[0]);
  } catch(error) {
    res.status(500).json({
      success: false,
      message: "Nie udało się usunąć wydarzenia",
    });
  }
});

module.exports = router;