require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const UserRoute = require("./routes/UserRoute");
const PlaceRoute = require("./routes/PlaceRoute");
const Place = require("./models/PlaceModel");
const User = require("./models/UserModel");
const { ObjectId } = require("mongodb");
const { registerUser, loginUser } = require("./controllers/UserController");
// const connectDb = require('./utils/db');

// Express app
const app = express();

// Connect to MongoDB
require("./utils/db");

//cors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

// Middleware
app.use(express.json());
app.use(cors());

// Routing
app.use(PlaceRoute);
// app.post("/register", registerUser);
// app.post("/login", loginUser);
app.use(UserRoute);
app.get("/", (req, res) => {
  res.send("App is working");
});

// Listen for app
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("Listening on port", PORT);
});
