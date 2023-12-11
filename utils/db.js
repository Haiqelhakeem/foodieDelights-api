const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/foodiedelights_db");

// mongoose.connect(process.env.ATLAS_URI)

// const connectDb = async () => {
//     try {
//         const conn = await mongoose.connect(process.env.ATLAS_URI, {
//         //   useUnifiedTopology: true,
//         //   useNewUrlParser: true,
//         })
//         console.log(`MongoDB Connected: ${conn.connection.host}`)
//       } catch (error) {
//         console.log(error)
//         process.exit(1)
//       }
// }

// module.exports = connectDb