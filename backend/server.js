const cors = require("cors");
const express = require("express");
const path = require("path");
const app = express();

const productsRouter = require("./routes/products");
const categoriesRouter = require("./routes/categories");
const authRouter = require("./routes/auth");
const usersRouter = require("./routes/users");
const contactRouter = require("./routes/contact");
const eventsRouter = require("./routes/events");
const reservationsRouter = require("./routes/reservations");
const eventRegistrationsRouter = require("./routes/eventRegistrations");
const eventParticipantsRouter = require("./routes/eventParticipants");
const woocommerceWebhookRouter = require("./routes/webhooks/woocommerce");

app.use(cors());
app.use(express.json({ verify: (req, res, buf) => { req.rawBody = buf } }));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/products", productsRouter);
app.use("/categories", categoriesRouter);
app.use("/auth", authRouter);
app.use("/users", usersRouter);
app.use("/contact", contactRouter);
app.use("/events", eventsRouter);
app.use("/reservations", reservationsRouter);
app.use("/eventRegistrations", eventRegistrationsRouter);
app.use("/eventParticipants", eventParticipantsRouter);
app.use("/webhooks/woocommerce", woocommerceWebhookRouter);

app.listen(3000, () => {
  console.log("Server działa na porcie 3000");
});