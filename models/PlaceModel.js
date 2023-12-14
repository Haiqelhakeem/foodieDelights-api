const mongoose = require('mongoose');

const Place = mongoose.model('Place', {
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    }
})

Place.createIndexes();

module.exports = Place