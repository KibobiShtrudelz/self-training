const mongoose = require("mongoose");
const { validationResult } = require("express-validator");

const Cart = require("../models/cart-model");
const User = require("../models/user-model");
const HttpError = require("../models/http-error");

const createCart = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return next(
      new HttpError(422, "Invalid inputs passed, please check your data.")
    );
  }

  const { cartItems } = req.body;

  const total = cartItems.reduce((acc, curr) => ({
    price: acc.price + curr.price,
  }));

  const createdCart = new Cart({
    cartItems,
    cartItemsCount: cartItems && cartItems.length,
    cartItemsTotalPrice: total && total.price.toString(),
    creator: req.params.userId,
  });

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

  console.log("user", user);

  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    await createdCart.save({ session });
    user.cart.push(createdCart);
    await user.save({ session });
    await session.commitTransaction();
  } catch (err) {
    const error = new HttpError(500, "Creating cart failed!");

    return next(error);
  }

  res.status(201).json({ cart: createdCart });
};

const getCartById = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.userId);

    if (!user) {
      const error = new HttpError(
        500,
        "Retrieving cart failed. User ID doesn't exist!"
      );

      return next(error);
    }

    const cart = await Cart.findOne({ creator: req.params.userId });

    if (!user.id.toString() === cart.creator.toString()) {
      const error = new HttpError(
        500,
        "Retrieving cart failed! User doesn't has corresponding cart."
      );

      return next(error);
    }

    res.status(200).json(cart);
  } catch {
    const error = new HttpError(500, "Retrieving cart failed!");

    return next(error);
  }
};

const updateCart = (req, res, next) => {};

const deleteCartById = (req, res, next) => {};

module.exports = {
  createCart,
  getCartById,
  updateCart,
  deleteCartById,
};
