const express = require("express");
const router = express.Router();
const pool = require("../config/db");
const jwt = require("jsonwebtoken");

const validateReservation = ({
  fullName,
  email,
  phone,
  reservationDate,
  reservationTime,
  duration,
  peopleCount,
  notes,
  status,
}) => {
  if (
    !fullName ||
    !email ||
    !reservationDate ||
    !reservationTime ||
    (!peopleCount && duration == null)
  )  { return "Brakuje wymaganych pól" }

  if (
    status !== "Oczekująca" &&
    status !== "Potwierdzona" &&
    status !== "Anulowana"
  ) { return "Wprowadzono niepoprawny status" }

  if (
    duration !== null &&
    duration !== 3 &&
    duration !== 5 &&
    duration !== 0
  ) { return "Wprowadzono niepoprawne dane" }

  if (duration === null && 
    (
      isNaN(Number(peopleCount)) ||
      Number(peopleCount) < 1 ||
      Number(peopleCount) > 4
    )
  ) { return "Wprowadzono niepoprawne dane" }
  
  if (isNaN(Date.parse(reservationDate))) { return "Wprowadzono niepoprawne dane" }
  return null;
}

function getUserId(req) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return null;
  try {
    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded.id;
  } catch {
    return null;
  }
}

async function validateRpgReservation({
  reservationDate,
  reservationTime,
  duration,
  excludeReservationId = null,
}) {

  let query = `
    SELECT reservation_time, duration
    FROM reservations
    WHERE reservation_date = $1
    AND duration IS NOT NULL
  `;

  const params = [reservationDate];

  if (excludeReservationId !== null) {
    query += ` AND id <> $2`;
    params.push(excludeReservationId);
  }

  const existingReservations = await pool.query(query, params);

  const dayOfWeek = new Date(reservationDate).getDay();
  const schedule = openingHours[dayOfWeek];

  if (!schedule) {
    return {
      success: false,
      status: 400,
      message: "Lokal jest zamknięty w tym dniu.",
    };
  }

  const newStart = Number(reservationTime.split(":")[0]);
  const newEnd =
    Number(duration) === 0
      ? schedule.close
      : newStart + Number(duration);

  if (newStart < schedule.open || newStart >= schedule.close) {
    return {
      success: false,
      status: 400,
      message: "Wybrana godzina jest poza godzinami otwarcia",
    };
  }

  if (newEnd > schedule.close) {
    return {
      success: false,
      status: 400,
      message: "Rezerwacja wykracza poza godziny otwarcia",
      availableDuration: schedule.close - newStart,
      requestedDuration: duration,
    };
  }

  for (const reservation of existingReservations.rows) {
    const existingStart = Number(
      reservation.reservation_time.split(":")[0]
    );

    const existingEnd =
      Number(reservation.duration) === 0
        ? schedule.close
        : existingStart + Number(reservation.duration);

    if (newStart < existingEnd && newEnd > existingStart) {
      return {
        success: false,
        status: 409,
        message: "Sala RPG jest już zajęta w tym czasie.",
      };
    }
  }

  return {
    success: true,
  };
}

const mapReservation = (reservation) => ({
  id: reservation.id,
  userId: reservation.user_id,
  fullName: reservation.full_name,
  email: reservation.email,
  phone: reservation.phone,
  reservationDate: reservation.reservation_date,
  reservationTime: reservation.reservation_time,
  duration: reservation.duration,
  status: reservation.status,
  notes: reservation.notes,
  createdAt: reservation.created_at,
  updatedAt: reservation.updated_at,
  peopleCount: reservation.people_count,
})

const openingHours = {
  0: null, // Niedziela
  1: { open: 9, close: 15 }, // Poniedziałek
  2: { open: 9, close: 15 }, // Wtorek
  3: null, // Środa
  4: { open: 9, close: 15 }, // Czwartek
  5: { open: 9, close: 15 }, // Piątek
  6: { open: 12, close: 19 }, // Sobota
}

router.get("/", async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT id, user_id, full_name, email, phone, reservation_date::text AS reservation_date, reservation_time, duration, status, notes, created_at, updated_at, people_count
      FROM reservations
      ORDER BY reservation_date ASC, reservation_time ASC
      `)
    const reservations = result.rows.map(mapReservation)
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
    res.json(mapReservation(result.rows[0]));
  } catch(error) {
    console.error(error)
    res.status(500).json({
      success: false,
      message: "Nie udało się pobrać rezerwacji",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      reservationDate,
      reservationTime,
      duration,
      peopleCount,
      notes,
    } = req.body;

    const isRpgReservation = duration !== null;
    const userId = getUserId(req);

    const validationError = validateReservation({
      fullName,
      email,
      phone,
      reservationDate,
      reservationTime,
      duration,
      peopleCount,
      notes,
    });
    if (validationError) {
      return res.status(400).json({
        success: false,
        message: validationError,
      });
    }

    if (!isRpgReservation) {
      const occupiedSlots = await pool.query(`
      SELECT COALESCE(SUM(people_count), 0) AS booked_slots
      FROM reservations
      WHERE duration IS NULL
      AND reservation_date = $1
      AND reservation_time = $2
      `, [reservationDate, reservationTime])

      const bookedSlots = Number(occupiedSlots.rows[0].booked_slots);
      if (bookedSlots + Number(peopleCount) > 20) {
        return res.status(409).json({
          success: false,
          message: "Nie ma wolnych miejsc w wybranym terminie.",
        })
      }
    } else {
        const validation = await validateRpgReservation({
          reservationDate,
          reservationTime,
          duration,
        })
        if (!validation.success) {
          return res.status(validation.status).json(validation);
        }
    }

    const result = await pool.query(`
      INSERT INTO reservations (user_id, full_name, email, phone, reservation_date, reservation_time, duration, people_count, notes)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
      RETURNING *
      `, [userId, fullName, email, phone, reservationDate, reservationTime, duration, peopleCount, notes])
    res.status(201).json(mapReservation(result.rows[0]));
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Nie udało się stworzyć rezerwacji",
    });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const {
      fullName,
      email,
      phone,
      reservationDate,
      reservationTime,
      duration,
      peopleCount,
      notes,
      status,
    } = req.body;

    const isRpgReservation = duration !== null;

    if (isNaN(Number(id))) {
      return res.status(400).json({
        success: false,
        message: "Niepoprawny numer rezerwacji",
      });
    }

    const checkId = await pool.query(`SELECT * FROM reservations WHERE id = $1`, [id]);
    if (checkId.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Nie znaleziono rezerwacji",
      });
    }

    const validationError = validateReservation({
      fullName,
      email,
      phone,
      reservationDate,
      reservationTime,
      duration,
      peopleCount,
      notes,
      status,
    });
    if (validationError) {
      return res.status(400).json({
        success: false,
        message: validationError,
      });
    }

    if (!isRpgReservation) {
      const occupiedSlots = await pool.query(`
      SELECT COALESCE(SUM(people_count), 0) AS booked_slots
      FROM reservations
      WHERE duration IS NULL
      AND reservation_date = $1
      AND reservation_time = $2
      AND id <> $3
      `, [reservationDate, reservationTime, id])

      const bookedSlots = Number(occupiedSlots.rows[0].booked_slots);
      if (bookedSlots + Number(peopleCount) > 20) {
        return res.status(409).json({
          success: false,
          message: "Nie ma wolnych miejsc w wybranym terminie.",
        })
      }
    } else {
      const validation = await validateRpgReservation({
        reservationDate,
        reservationTime,
        duration,
        excludeReservationId: id,
      })
      if (!validation.success) {
        return res.status(validation.status).json(validation);
      }
    }

    const result = await pool.query(`
      UPDATE reservations
      SET 
      full_name = $1,
      email = $2,
      phone = $3,
      reservation_date = $4,
      reservation_time = $5,
      duration = $6,
      people_count = $7,
      notes = $8,
      status = $9,
      updated_at = CURRENT_TIMESTAMP
      WHERE id = $10
      RETURNING *
      `, [fullName, email, phone, reservationDate, reservationTime, duration, peopleCount, notes, status, id])
    
    res.status(200).json(mapReservation(result.rows[0]));

  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Nie udało się zaktualizować rezerwacji",
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (isNaN(Number(id))) {
      return res.status(400).json({
        success: false,
        message: "Niepoprawny numer rezerwacji",
      });
    }

    const result = await pool.query(
      `DELETE FROM reservations
       WHERE id = $1
       RETURNING *`,
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Nie znaleziono rezerwacji",
      });
    }

    res.status(200).json({
      success: true,
      message: "Rezerwacja została usunięta",
      reservation: mapReservation(result.rows[0]),
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Nie udało się usunąć rezerwacji",
    });
  }
});

module.exports = router;