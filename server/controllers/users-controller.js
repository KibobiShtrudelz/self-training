const { validationResult } = require("express-validator");

const HttpError = require("../models/http-error");
const { FAKE_USERS } = require("../constants");

const User = require("../models/user-model");

const getUsers = async (req, res, next) => {
  const users = await User.find().exec();
  res.json(users);
};

const signup = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return next(new HttpError(422, "Invalid inputs!"));
  }

  const { email } = req.body;
  let existingUser;

  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    const error = new HttpError(500, "Signing up failed!");
    return next(error);
  }

  if (existingUser) {
    const error = new HttpError(422, "User exists!");
    return next(error);
  }

  const createdUser = new User({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    address: req.body.address,
    email: req.body.email,
    password: req.body.password,
  });

  try {
    await createdUser.save();

    res.status(201).json({ user: createdUser.toObject({ getters: true }) });
  } catch (err) {
    const error = new HttpError(500, "Signing up failed!");
    return next(error);
  }
};

const login = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return next(new HttpError(422, "Invalid inputs!"));
  }

  const { email, password } = req.body;
  let existingUser;

  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    const error = new HttpError(500, "Logging in failed!");
    return next(error);
  }

  if (!existingUser || existingUser.password !== password) {
    const error = new HttpError(401, "Wrong credentials!");
    return next(error);
  }

  res.json({ message: "Logged in!" });
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
