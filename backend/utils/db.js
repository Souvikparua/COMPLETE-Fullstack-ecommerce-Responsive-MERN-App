const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URL;
    mongoose.set("strictQuery", false);
    await mongoose.connect(uri);
    console.log("Connection to Databse is successful");
  } catch (error) {
    console.log("Connection to Database is unsuccessful");
    console.log(error);
  }
};

module.exports = connectDB;
