const express = require("express");
const router = express.Router();
const productModel = require("../Models/productModel");

router.post("/uploadProduct", async (req, res) => {
  try {
        console.log(req.body);
        const data = await productModel.create(req.body);
        console.log(data);
        res.send({ message: "Upload successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Internal Server Error", alert: false });
    }
});

router.get("/product", async (req, res) => {
  try {
        const data = await productModel.find({});
        res.send(JSON.stringify(data));
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Internal Server Error", alert: false });
    }
});

module.exports = router;
