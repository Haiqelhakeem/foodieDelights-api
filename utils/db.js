const mongoose = require('mongoose');

//connect to mongodb with localhost
// mongoose.connect("mongodb://127.0.0.1:27017/foodiedelights_db").then(() => {
//     console.log('Connected to MongoDB localhost');
// }).catch((error) => {
//     console.error('Error connecting to MongoDB:', error);
// });

//connect to mongodb with atlas
mongoose.connect(process.env.ATLAS_URI).then(() => {
    console.log('Connected to MongoDB Atlas');
}).catch((error) => {
    console.error('Error connecting to MongoDB Atlas:', error);
})