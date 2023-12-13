// controllers/placeController.js
const { ObjectId } = require("mongodb");
const Places = require("../models/PlaceModel");

const getAllPlaces = async (req, res) => {
  try {
    const places = await Places.find();
    res.json(places);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add getPlaceById, updatePlace, deletePlace, and other CRUD operations as needed
const getPlaceById = async (req, res) => {
  // const { id } = req.params;
  res.send("place by id");
  // const query = { _id: ObjectId(req.params.id) };
  
  //   await Places.findOne(query).then((place) => {
  //     res.json(place);
  //   }).catch((err) => {
  //     console.log(err);
  //   });
}

const createPlace = async (req, res) => {
  const placeData = req.body;
  // const { name, desc, address, category, img, rating } = req.body;
  console.log("placeData: ", placeData);
  // res.send("placeData: ", placeData);
  try {
    const newPlace = await Places.create(placeData);
    res.status(201).json(newPlace);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add update, delete, and other CRUD operations as needed

module.exports = {
  getAllPlaces,
  createPlace,
  getPlaceById
}