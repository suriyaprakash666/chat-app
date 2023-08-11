require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const chatappRoutes = require("./routes/chatappRoutes");
const cookieParser = require("cookie-parser");
const ws = require("ws");

const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

app.get("/register", (req, res) => {
  res.send("Hello World");
});

// Routes
app.use("/", chatappRoutes);

// DB connection
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Connected to database"));

// port
const server = app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});

const wss = new ws.WebSocketServer({ server });
wss.on("connection", (connection) => {
  console.log("connected");
  connection.send("Hello!");
});
