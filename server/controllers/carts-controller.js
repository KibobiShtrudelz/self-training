const HttpError = require("../models/http-error");

const Cart = require("../models/cart-model");
const User = require("../models/user-model");

const createCart = async (req, res, next) => {
  try {
    const isValidUser = await User.findById(req.params.userId);

    if (!isValidUser) {
      const error = new HttpError(500, "User ID doesn't exist!");

      return next(error);
    }

    const { cartItems } = req.body;

    const total =
      cartItems &&
      cartItems.reduce((acc, curr) => ({
        price: acc.price + curr.price,
      }));

    const createdCart = new Cart({
      cartItems,
      cartItemsCount: cartItems && cartItems.length,
      cartItemsTotalPrice: total && total.price.toString(),
    });

    await createdCart.save();
    res.status(201).json({ cart: createdCart });
  } catch {
    const error = new HttpError(500, "Creating cart failed!");

    return next(error);
  }
};

const getCartById = (req, res, next) => {};

const updateCart = (req, res, next) => {};

const deleteCartById = (req, res, next) => {};

module.exports = {
  createCart,
  getCartById,
  updateCart,
  deleteCartById,
};
