const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  }
});

const Place = mongoose.model("Place", placeSchema);

module.exports = Place;
