const mongoose = require("mongoose");


const productSchema = mongoose.Schema({
    name: String,
    category:String,
    image: String,
    price: String,
    description: String,
  });

// Product model created using product Schema  
const Product = mongoose.model("product", productSchema);
module.export = Product;