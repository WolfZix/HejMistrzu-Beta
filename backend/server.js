const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Backend działa" });
});

app.get("/hello", (req, res) => {
  res.json({ message: "Cześć z backendu" });
});

app.get("/hello/:name", (req, res) => {
  console.log(req.params);
  res.json({ message: `Cześć ${req.params.name}`});
});

app.get("/search", (req, res) => {
  console.log(req.query);
  res.json({ query: req.query });
});

app.get("/register", (req, res) => {
  res.send("Uzytkownik otrzymany");
});

app.post("/register", (req, res) => {
  console.log(req.body);
  res.json({
    success: true,
    message: "Uzytkownik otrzymany"
  });
});

app.listen(3000, () => {
  console.log("Server działa na porcie 3000");
});