const { validationResult } = require("express-validator");

const HttpError = require("../models/http-error");
const { FAKE_USERS } = require("../constants");

const User = require("../models/user-model");

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
    cart: [],
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

const getUsers = async (req, res, next) => {
  let users;

  try {
    users = await User.find({}, "-password").exec();
    console.log("users", users);
  } catch (err) {
    const error = new HttpError(500, "Fetching users failed!");
    return next(error);
  }

  res.status(200).json({
    users: users.map(user => user.toObject({ getters: true })),
  });
};

module.exports = {
  getUsers,
  signup,
  login,
};
