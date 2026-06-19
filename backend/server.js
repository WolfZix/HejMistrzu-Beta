const express = require("express");
const cors = require("cors");
const app = express();

const reservations = [];

app.use(cors());
app.use(express.json());

app.get("/register", (req, res) => {
  res.send("Uzytkownik otrzymany");
});

app.post("/register", (req, res) => {
  const { name } = req.body;
  if (!name) {
    res.status(400).json({
    success: false,
    message: `Brakuje imienia`
  });
  }
  else {
    res.json({
    success: true,
    message: `Czesc ${req.body.name}`
  });
  }
  console.log("BACKEDN:",req.body);
});

app.get("/rezerwacja", (req, res) => {
  res.json({
    rezerwacje: reservations,
    message: `Rezerwacje: ${reservations}`
  })
})

app.post("/rezerwacja", (req, res) => {
  const { fullName, email, phone, sessionValue, timeValue, date, notes } = req.body;
  if (!fullName) {
    return res.status(400).json({
      success: false,
      message: "Niepoprawne imie"
    })
  }
  if (!email) {
    return res.status(400).json({
      success: false,
      message: "Niepoprawny email"
    })
  }
  if (!phone) {
    return res.status(400).json({
      success: false,
      message: "Niepoprawny numer telefonu"
    })
  }
  if (!sessionValue) {
    return res.status(400).json({
      success: false,
      message: "Niepoprawny rodzaj rezerwacji"
    })
  }
  if (!timeValue) {
    return res.status(400).json({
      success: false,
      message: "Niepoprawna ilość godzin"
    })
  }
  if (!date) {
    return res.status(400).json({
      success: false,
      message: "Niepoprawna data"
    })
  }
  if (fullName && email && phone && sessionValue && timeValue && date) {
    res.status(200).json({
      success: true,
      message: "Rezerwacja dodana pomyślnie :)",
    })
    reservations.push(req.body)
  }
})

app.listen(3000, () => {
  console.log("Server działa na porcie 3000");
});