require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const chatAppRoutes = require("./routes/chatAppRoutes");
const cookieParser = require("cookie-parser");
const webSocket = require("./webSocket");

const cors = require("cors");

const app = express();

// Middleware
app.use("/uploads", express.static(__dirname + "/uploads"));
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

// Routes
app.use("/", chatAppRoutes);

// DB connection
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Connected to database"));

// port
const server = app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});

// Web Socket (read username and id from the cookie for this connection)
webSocket(server);
