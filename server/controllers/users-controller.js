const { v4: uuidv4 } = require("uuid");
const { validationResult } = require("express-validator");

const HttpError = require("../models/http-error");

const FAKE_USERS = [
  {
    id: 1,
    creator: "u1",
    name: "Alaedin Goliam Molia",
    email: "changa@chunga.diuner",
    password: "shizalmainizal",
    cart: [
      {
        cartItems: [],
      },
    ],
  },
];

const getUsers = (req, res, next) => {
  res.json({ users: FAKE_USERS });
};

const signup = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    throw new HttpError(422, "Invalid inputs passed.");
  }

  const { name, email, password } = req.body;

  const hasUser = FAKE_USERS.find(user => user.email === email);

  if (hasUser) {
    throw new HttpError(422, "E-mail already exists!");
  }

  const createUser = {
    id: uuidv4(),
    name,
    email,
    password,
    cart: [
      {
        cartItems: [],
      },
    ],
  };

  FAKE_USERS.push(createUser);

  res.status(201).json({ user: createUser });
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
  // TODO: change delete logic to find and delete by id
  if (FAKE_USERS[0].cart.length === 0) {
    throw new HttpError("404, Cart is not empty!");
  }

  FAKE_USERS[0].cart = [];

  res.status(200).json({ message: "Deleted cart.", cart: FAKE_USERS[0].cart });
};

module.exports = {
  getUsers,
  signup,
  login,
  getUserById,
  createCart,
  updateCart,
  getCartById,
  deleteCartById,
};
