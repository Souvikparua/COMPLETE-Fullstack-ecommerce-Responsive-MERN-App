const { StatusCodes } = require("http-status-codes");
const User = require("../models/userModel");
const { BadRequestError, UnauthenticatedError } = require("../errors");

const signup = async (req, res) => {
  const { firstname, username, password, email } = req.body;
  const userData = { firstname, username, password, email };
  const user = await User.create({ ...userData });

  const token = user.createJWT();

  res.status(StatusCodes.CREATED).json({
    user: {
      id: user._id,
      email: user.email,
      firstname: user.firstname,
      username: user.username,
      token,
    },
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequestError("Please provide email and password");
  }
  const user = await User.findOne({ email });
  if (!user) {
    throw new UnauthenticatedError("Invalid Credentials");
  }
  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError("Invalid Credentials");
  }
  // compare password
  const token = user.createJWT();
  res.status(StatusCodes.OK).json({
    user: {
      id: user._id,
      username: user.username,
      firstname: user.firstname,
      lastName: user.lastName,
      email: user.email,
      address: user.address,
      token,
    },
  });
};

module.exports = { login, signup };
