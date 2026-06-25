const cors = require("cors");
const express = require("express");
const pool = require("./src/config/db");
const app = express();

const reservationsRouter = require("./routes/reservations");
const productsRouter = require("./routes/products");
const categoriesRouter = require("./routes/categories");
const authRouter = require("./routes/auth");
const usersRouter = require("./routes/users");

app.use(cors());
app.use(express.json());

app.use("/reservations", reservationsRouter);
app.use("/products", productsRouter);
app.use("/categories", categoriesRouter);
app.use("/auth", authRouter);
app.use("/users", usersRouter);

app.listen(3000, () => {
  console.log("Server działa na porcie 3000");
});