const HttpError = require("../models/http-error");

const Cart = require("../models/cart-model");
const User = require("../models/user-model");

const createCart = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.userId);

    if (!user) {
      const error = new HttpError(
        500,
        "Creating cart failed. User ID doesn't exist!"
      );

      return next(error);
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

    await createdCart.save();

    res.status(201).json({ cart: createdCart });
  } catch {
    const error = new HttpError(500, "Creating cart failed!");

    return next(error);
  }
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
