const express = require("express");
const { signup, login } = require("../controllers/userController");
const router = express.Router();

router.get("/",  (req, res) => {
    // send back a response to the client
    res.send({ message: "Welcome to our API" });
})
router.post("/signup",signup);

router.post("/login", login);


module.exports =  router;
