// controllers/placeController.js
const { ObjectId } = require("mongodb");
const Place = require("../models/PlaceModel");

const getAllPlaces = async (req, res) => {
  try {
    const places = await Place.find();
    res.json(places);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add getPlaceById, updatePlace, deletePlace, and other CRUD operations as needed
const getPlaceById = async (req, res) => {
  const id = req.params.id;
  await Place.findById(id)
    .then((place) => {
      res.json(place);
    })
    .catch((err) => {
      console.log(err);
    });
};
// Create Place
const createPlace = async (req, res) => {
  const placeData = req.body;

  try {
    const place = await Place.create(placeData);
    console.log("Place created:", place);
    res.status(201).json(place);
  } catch (error) {
    console.error("Error creating place:", error.message);
    let errorMessage = "Failed to create place";

    // Check for validation errors (e.g., required fields missing)
    if (error.errors) {
      const errorKeys = Object.keys(error.errors);
      errorMessage = `Validation error: ${errorKeys
        .map((key) => error.errors[key].message)
        .join(", ")}`;
    }

    res.status(500).json({ error: errorMessage });
  }
};

// Add update, delete, and other CRUD operations as needed

module.exports = {
  getAllPlaces,
  createPlace,
  getPlaceById,
};
