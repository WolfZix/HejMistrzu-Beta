const express = require("express");
const router = express.Router();
const pool = require("../config/db");
const verifyToken = require("../middleware/verifyToken");
const requireAdmin = require("../middleware/requireAdmin");

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
  attended: participant.attended,
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

router.patch("/:id/attendance", verifyToken, requireAdmin, async (req, res) => {
  const client = await pool.connect();

  try {
    const { id } = req.params;
    if (!Number.isInteger(Number(id)) || Number(id) <= 0) {
      return res.status(400).json({
        success: false,
        message: "Niepoprawne ID uczestnika",
      });
    }

    await client.query("BEGIN");
    const participantResult = await client.query(
      `
        SELECT id, event_id, user_id, attended
        FROM event_participants
        WHERE id = $1
        FOR UPDATE
      `,
      [id]
    );

    if (participantResult.rowCount === 0) {
      await client.query("ROLLBACK");
      return res.status(404).json({
        success: false,
        message: "Nie znaleziono uczestnika",
      });
    }

    const participant = participantResult.rows[0];
    if (participant.attended) {
      await client.query("ROLLBACK");
      return res.status(409).json({
        success: false,
        message: "Obecność została już potwierdzona",
      });
    }

    await client.query(
      `
        UPDATE event_participants
        SET attended = TRUE
        WHERE id = $1
      `,
      [id]
    );

    let pointsAwarded = 0;
    if (participant.user_id !== null) {
      const pointsResult = await client.query(
        `
          INSERT INTO battlepass_points (
            user_id,
            points,
            source_type,
            source_id,
            description
          )
          VALUES ($1, 10, 'event', $2, $3)
          ON CONFLICT (user_id, source_type, source_id)
            WHERE source_id IS NOT NULL AND points > 0
          DO NOTHING
          RETURNING id
        `,
        [
          participant.user_id,
          participant.event_id,
          `Udział w wydarzeniu ID ${participant.event_id}`,
        ]
      );

      pointsAwarded = pointsResult.rowCount > 0 ? 10 : 0;
    }

    await client.query("COMMIT");
    return res.json({
      success: true,
      message: "Obecność została potwierdzona",
      attended: true,
      pointsAwarded,
    });
  } catch (error) {
    await client.query("ROLLBACK");
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Nie udało się potwierdzić obecności",
    });
  } finally {
    client.release();
  }
});

module.exports = router;