const express = require("express");
const router = express.Router();
const pool = require("../config/db");
const upload = require("../config/multer");
const fs = require("fs/promises");
const path = require("path");

const validateEvent = ({ title, description, category, eventDate, eventTime, maxSlots, price, link, image, location }) => {
  if (!title || !description || !category || !eventDate || !eventTime || !maxSlots || price == null) { return "Brakuje wymaganych pól" }
  if (isNaN(Number(maxSlots)) || Number(maxSlots) <= 0) { return "Niepoprawna ilość miejsc" }
  if (isNaN(Number(price)) || Number(price) < 0 || Number(price) >= 9999) { return "Niepoprawna cena" }
  if (title.trim().length === 0) { return "Niepoprawny tytuł" }
  if (description.trim().length === 0) { return "Niepoprawny opis" }
  if (category.trim().length === 0) { return "Niepoprawna kategoria" }
  if (isNaN(Date.parse(eventDate))) { return "Niepoprawna data" }
  if (!image) { return "Brakuje zdjęcia" }
  if (link && !/^https?:\/\/.+/i.test(link)) { return "Niepoprawny link" }
  if (!location) { return "Brak lokalizacji" }
  return null;
};

router.get("/", async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT
        events.id,
        events.title,
        events.description,
        events.image,
        events.category,
        TO_CHAR(events.event_date, 'YYYY-MM-DD') AS event_date,
        events.event_time,
        events.max_slots,
        COALESCE(SUM(event_registrations.slots), 0) AS occupied_slots,
        events.max_slots - COALESCE(SUM(event_registrations.slots), 0) AS free_slots,
        events.price,
        events.link,
        events.location,
        events.created_at,
        events.updated_at
      FROM events
      LEFT JOIN event_registrations
        ON event_registrations.event_id = events.id
      GROUP BY events.id
      ORDER BY events.event_date ASC, events.event_time ASC
    `);
      
      const events = result.rows.map((event) => ({
        id: event.id,
        title: event.title,
        description: event.description,
        image: event.image,
        category: event.category,
        date: event.event_date,
        startTime: event.event_time,
        maxSlots: event.max_slots,
        freeSlots: Number(event.free_slots),
        price: event.price,
        link: event.link,
        location: event.location,
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

router.post("/", upload.single("image"), async (req, res) => {
  const badRequest = (message) =>
    res.status(400).json({
      success: false,
      message,
    });
  try {
    if (!req.file) { return badRequest("Zdjęcie wydarzenia jest wymagane") }
    const validationError = validateEvent({
      ...req.body,
      image: req.file.filename,
    });
    if (validationError) { return badRequest(validationError) }

    const { title, description, category, eventDate, eventTime, maxSlots, price, link, location } = req.body;
    const image = req.file.filename;

    const result = await pool.query(
      `INSERT INTO events
      (title, description, image, category, event_date, event_time, max_slots, price, link, location)
      VALUES ($1,$2,$3,$4,$5,$6,$7,$8, $9, $10)
      RETURNING *`,
      [title, description, image, category, eventDate, eventTime, maxSlots, price, link, location]
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

router.put("/:id", upload.single("image"), async (req, res) => {
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
    const validationError = validateEvent({
      ...req.body,
      image: req.file?.filename ?? existingEvent.rows[0].image,
    });
    if (validationError) { return badRequest(validationError) }

    const { title, description, category, eventDate, eventTime, maxSlots, price, link, location } = req.body;
    let image = existingEvent.rows[0].image;
    if (req.body.removeImage === "true") {
      image = null;
    } else if (req.file) {
      image = req.file.filename;
    }
    const result = await pool.query(`
      UPDATE events
      SET title = $1, description = $2, image = $3, category = $4, event_date = $5,
          event_time = $6, max_slots = $7, price = $8, link = $9, location = $10
      WHERE id = $11
      RETURNING *`,
      [title, description, image, category, eventDate, eventTime, maxSlots, price, link, location, id]
    );
    if (existingEvent.rows[0].image && (req.file || req.body.removeImage === "true")) {
      try {
        await fs.unlink(
          path.join(__dirname, "../uploads", existingEvent.rows[0].image)
        );
      } catch(err) {
        console.error("Nie udało się usunąć starego zdjęcia:", err);
      }
    }
    res.status(200).json(result.rows[0]);
  } catch(error) {
    console.error(error);
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
    if (existingEvent.rows[0].image) {
      try {
        await fs.unlink(path.join(__dirname, "../uploads", existingEvent.rows[0].image));
      } catch (err) {
        console.error("Nie udało się usunąć zdjęcia:", err);
      }
    }
    res.status(200).json(result.rows[0]);
  } catch(error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Nie udało się usunąć wydarzenia",
    });
  }
});

module.exports = router;