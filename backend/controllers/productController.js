const Product =  require('../models/productModel');

// Function to upload new product
 const uploadProduct = async (req, res) => {
    try {
        console.log(req.body);
        const data = await Product.create(req.body);
        console.log(data);
        res.send({ message: "Upload successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Internal Server Error", alert: false });
    }
}

 const product = async (req, res) => {
    try {
          const data = await productModel.find({});
          res.send(JSON.stringify(data));
      } catch (error) {
          console.error(error);
          res.status(500).send({ message: "Internal Server Error", alert: false });
      }
  };


module.exports = {uploadProduct , product};