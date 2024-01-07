const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();




const connectDB = async () => {
    try {
        const uri = process.env.MONGO_URL
        await mongoose.connect(uri)
        console.log("Connection to Databse is successful")
    } catch (error) {
        console.log("Connection to Database is unsuccessful")
    }
}

module.exports = connectDB
