require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const UserRoute = require("./routes/UserRoute");
const PlaceRoute = require("./routes/PlaceRoute");
const Place = require("./models/PlaceModel");
const User = require("./models/UserModel");
const { ObjectId } = require("mongodb");
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
app.get("/", (req, res) => {
  res.send("App is working");
});

app.post("/register", async (req, resp) => {
  try {
    const user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    if (result) {
      delete result.password;
      resp.send(req.body);
      console.log(result);
    } else {
      console.log("User already register");
    }
  } catch (e) {
    resp.send("Something Went Wrong");
  }
});

// Listen for app
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("Listening on port", PORT);
});
