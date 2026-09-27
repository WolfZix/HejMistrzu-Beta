const express = require("express");

const router = express.Router();

router.post("/", (req, res) => {
  console.log("Otrzymano zamówienie:");
  console.log(req.body);

  res.status(201).json({
    message: "Zamówienie otrzymane",
  });
});

module.exports = router;