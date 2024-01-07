const User = require('../models/userModel');


 const signup = async (req, res) => {
    try {
        const { email } = req.body;

        // Check if the email is already registered
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.send({ message: "Email id is already registered", alert: false });
        }

        // Create a new user and save to the database
        const newUser = new userModel(req.body);
        await newUser.save();

        res.send({ message: "Successfully signed up", alert: true });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Internal Server Error", alert: false });
    }
}


 const login = async (req, res) => {
    try {
        const { email } = req.body;

        // Find the user with the provided email
        const user = await User.findOne({ email });

        if (user) {
            const dataSend = {
                _id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                image: user.image,
            };

            res.send({
                message: "Login is successful",
                alert: true,
                data: dataSend,
            });
        } else {
            res.send({
                message: "Email is not available, please sign up",
                alert: false,
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Internal Server Error", alert: false });
    }
}

module.exports = { login , signup};