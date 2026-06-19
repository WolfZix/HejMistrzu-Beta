const cors = require("cors");
const express = require("express");
const app = express();

const reservationsRouter = require("./routes/reservations");
const productsRouter = require("./routes/products");

app.use(cors());
app.use(express.json());

app.use("/reservations", reservationsRouter);
app.use("/products", productsRouter);

app.listen(3000, () => {
  console.log("Server działa na porcie 3000");
});