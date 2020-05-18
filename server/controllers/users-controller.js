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

const updateCart = async (req, res, next) => {
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
    const error = new HttpError(500, "Updating cart failed, please try again.");

    return next(error);
  }

  if (!user) {
    const error = new HttpError(
      404,
      "Updating cart failed. User ID doesn't exist!"
    );

    return next(error);
  }

  console.log("user", user);

  const { cartItems } = req.body;

  const total = cartItems.reduce((acc, curr) => ({
    price: acc.price + curr.price,
  }));

  const updatedCart = {
    cartItems,
    cartItemsCount: cartItems && cartItems.length,
    cartItemsTotalPrice: total && total.price.toString(),
  };

  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    await user.save({ session });
    user.cart.push(updatedCart);
    await user.save({ session });
    await session.commitTransaction();
  } catch (err) {
    const error = new HttpError(500, "Updating cart failed!");

    return next(error);
  }

  res.status(201).json({ cart: updatedCart });
};

const getCart = (req, res, next) => {};

const deleteCart = async (req, res, next) => {
  const { userId } = req.params;
  let cart;

  try {
    cart = await Cart.findById(userId).populate("creator");
    console.log("cart", cart);
  } catch (err) {
    const error = new HttpError(500, "Could not delete cart.");
    return next(error);
  }

  if (!cart) {
    const error = new HttpError(404, "Could not find cart with this id.");
    return next(error);
  }

  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    await cart.remove({ session });
    cart.creator.pull(cart);
    await cart.creator.save({ session });
    await session.commitTransaction();
  } catch (err) {
    const error = new HttpError(500, "Could not delete cart.");
    return next(error);
  }

  res.status(200).json({ message: "Cart is deleted." });
};

module.exports = {
  getUsers,
  signup,
  login,
  updateCart,
  getCart,
  deleteCart,
};
