const { validationResult } = require("express-validator");

const HttpError = require("../models/http-error");
const { FAKE_USERS } = require("../constants");

const User = require("../models/user-model");

const getUsers = async (req, res, next) => {
  const users = await User.find().exec();
  res.json(users);
};

const signup = async (req, res, next) => {
  const createdUser = new User({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
    cart: {
      cartItems: [],
    },
  });

  const result = await createdUser.save();

  res.json(result);
};

const login = (req, res, next) => {
  const errors = validationResult(req);

  const { email, password } = req.body;

  const identifiedUser = FAKE_USERS.find(user => user.email === email);

  if (!identifiedUser || identifiedUser.password !== password) {
    throw new HttpError(401, "No such user or wrong credentials!");
  }

  res.status(200).json({ message: "Logged in!" });
};

const getUserById = (req, res, next) => {
  const { userId } = req.params;
  const user = FAKE_USERS.find(u => u.creator === userId);

  if (!user) {
    throw new HttpError(404, "Could not find a user for the provided user id.");
  }

  res.status(200).json({ user });
};

module.exports = {
  getUsers,
  signup,
  login,
  getUserById,
};
