const express = require("express");
const { uploadProduct, product } = require("../controllers/productController");
const router = express.Router();


router.post("/uploadProduct",uploadProduct);
router.get("/product", product);

module.exports = router;
