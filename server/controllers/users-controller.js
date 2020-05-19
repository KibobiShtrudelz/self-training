const mongoose = require("mongoose");
const { validationResult } = require("express-validator");

const User = require("../models/user-model");
const HttpError = require("../models/http-error");

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
    cart: {},
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

// TODO: make this update function update cartItems, etc.
const createCart = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return next(
      new HttpError(422, "Invalid inputs passed, please check your data.")
    );
  }

  let user;

  try {
    user = await User.findById(req.params.userId);
  } catch (err) {
    const error = new HttpError(500, "Creating cart failed, please try again.");

    return next(error);
  }

  if (!user) {
    const error = new HttpError(
      404,
      "Creating cart failed. User ID doesn't exist!"
    );

    return next(error);
  }

  const { cartItems } = req.body;

  const total = cartItems.reduce((acc, curr) => ({
    price: acc.price + curr.price,
  }));

  const currCart = (user && user.cart) || {};
  console.log("currCart", currCart);

  const createdCart = {
    cartItems,
    cartItemsCount: cartItems && cartItems.length,
    cartItemsTotalPrice: total && total.price.toString(),
  };

  try {
    user.cart = createdCart;
    await user.save();
  } catch (err) {
    const error = new HttpError(500, "Creating cart failed!");

    return next(error);
  }

  res.status(201).json({ cart: createdCart });
};

const updateCart = (req, res, next) => {};

const getUserById = async (req, res, next) => {
  const { userId } = req.params;

  let user;

  try {
    user = await User.findById(userId);
    console.log("user", user);
  } catch (err) {
    const error = new HttpError(500, "Retrieving user failed.");

    return next(error);
  }

  if (!user) {
    const error = new HttpError(404, "User not found, incorrect ID provided!");

    return next(error);
  }

  console.log("user by id", user);

  res.status(200).json(user);
};

const deleteCart = async (req, res, next) => {
  const { userId } = req.params;

  let user;

  try {
    user = await User.findById(userId);
  } catch (err) {
    const error = new HttpError(500, "Retrieving user failed.");

    return next(error);
  }

  if (!user) {
    const error = new HttpError(404, "User not found!");

    return next(error);
  }

  try {
    user.cart = [];
    await user.save();
  } catch (err) {
    const error = new HttpError(500, "Could not delete cart.");
    return next(error);
  }

  res.status(200).json({ user, message: "Cart is deleted." });
};

module.exports = {
  getUsers,
  signup,
  login,
  createCart,
  updateCart,
  getUserById,
  deleteCart,
};
