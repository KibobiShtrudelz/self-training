// const { v4: uuidv4 } = require("uuid");

const HttpError = require("../models/http-error");

const FAKE_USERS = [
  {
    creator: "u1",
    name: "Aladin Goliam Molia",
    email: "changa@chunga.diuner",
    cart: [
      {
        cartItems: [],
      },
    ],
  },
];

const getUserById = (req, res, next) => {
  const { userId } = req.params;
  const user = FAKE_USERS.find(u => u.creator === userId);

  if (!user) {
    throw new HttpError(404, "Could not find a user for the provided user id.");
  }

  res.status(200).json({ user });
};

const createCart = (req, res, next) => {
  const { userId } = req.params;
  const user = FAKE_USERS.find(u => u.creator === userId);

  if (!user) {
    throw new HttpError(404, "Could not find a user for the provided user id.");
  }

  const { title, description, price, amount } = req.body;

  const createdCart = {
    title,
    description,
    price,
    amount,
  };

  FAKE_USERS[0].cart[0].cartItems.push(createdCart);

  res.status(201).json({ cart: FAKE_USERS[0].cart });
};

const updateCart = (req, res, next) => {
  // TODO: change logic to update specific item/s in cart by itemId

  const { title, description } = req.body;
  const { userId } = req.params;

  console.log("FAKE_USERS[0].cart[0]", FAKE_USERS[0].cart[0]);
  const updatedCart = FAKE_USERS[0].cart[0].cartItems[0];

  console.log("updatedCart", updatedCart);
  updatedCart.title = title;
  updatedCart.description = description;

  res.status(200).json({ cart: { cartItems: [{ ...updatedCart }] } });
};

const getCartById = (req, res, next) => {};

const deleteCartById = (req, res, next) => {
  FAKE_USERS[0].cart = [];

  res.status(200).json({ message: "Deleted cart.", cart: FAKE_USERS[0].cart });
};

module.exports = {
  getUserById,
  createCart,
  updateCart,
  getCartById,
  deleteCartById,
};
