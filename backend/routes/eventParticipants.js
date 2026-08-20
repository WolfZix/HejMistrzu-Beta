const express = require("express");
const router = express.Router();
const pool = require("../config/db");

const mapParticipant = (participant) => ({
  id: participant.id,
  eventId: participant.event_id,
  userId: participant.user_id,
  name: participant.name,
  surname: participant.surname,
  pokemonId: participant.pokemon_id,
  nickname: participant.nickname,
  username: participant.username,
  email: participant.email,
  createdAt: participant.created_at,
});

function validateParticipant({ name, surname, email }) {
  if (
    !name ||
    !surname ||
    !email ||
    name.trim() === "" ||
    surname.trim() === "" ||
    email.trim() === ""
  ) {
    return false;
  }

  return true;
}

async function doesEventExist(eventId) {
  const result = await pool.query(
    `SELECT id FROM events WHERE id = $1`,
    [eventId]
  );

  return result.rowCount > 0;
}

router.get("/", async (req, res) => {
  try {
    const { eventId } = req.query;
    let query = `
    SELECT event_participants.*, users.username
    FROM event_participants
    LEFT JOIN users ON event_participants.user_id = users.id`;

    const values = [];
    if (eventId) {
      query += ` WHERE event_participants.event_id = $1`;
      values.push(eventId);
    }

    query += ` ORDER BY event_participants.created_at DESC`;

    const result = await pool.query(query, values);
    const participants = result.rows.map(mapParticipant);

    res.json(participants);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Nie udało się pobrać uczestników",
    });
  }
});

router.post("/", async (req, res) => {
  const {
    eventId,
    userId,
    name,
    surname,
    pokemonId,
    nickname,
    email,
  } = req.body;

  try {
    if (!(await doesEventExist(eventId))) {
      return res.status(404).json({
        message: "Nie znaleziono takiego wydarzenia",
      });
    }

    if (!validateParticipant({ name, surname, email })) {
      return res.status(400).json({
        message: "Wprowadzono niepoprawne dane",
      });
    }

    const result = await pool.query(`
      INSERT INTO event_participants (
        event_id,
        user_id,
        name,
        surname,
        pokemon_id,
        nickname,
        email
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *
    `, [
      eventId,
      userId ?? null,
      name,
      surname,
      pokemonId || null,
      nickname || null,
      email
    ]);

    res.status(201).json(mapParticipant(result.rows[0]));
  } catch (error) {
    if (error.code === "23505") {
      return res.status(409).json({
        message: "Użytkownik jest już zapisany na to wydarzenie",
      });
    }
    console.error(error);

    res.status(500).json({
      message: "Nie udało się dodać uczestnika",
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (isNaN(Number(id))) {
      return res.status(400).json({
        message: "Niepoprawne ID uczestnika",
      });
    }
    const result = await pool.query(`DELETE FROM event_participants WHERE id = $1 RETURNING *`, [id]);
    if (result.rowCount === 0) {
      return res.status(400).json({
        message: "Nie znaleziono uczestnika",
      });
    }
    res.setMaxListeners(200).json({
      message: "Uczestnik został usunięty",
      participant: mapParticipant(result.rows[0]),
    });
  } catch(error) {
    console.error(error);
    res.status(500).json({
      message: "Nie udało się usunąć uczestnika",
    });
  }
})

module.exports = router;