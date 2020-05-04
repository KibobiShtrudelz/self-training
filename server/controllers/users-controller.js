const { v4: uuidv4 } = require("uuid");

const HttpError = require("../models/http-error");

const FAKE_USERS = [
  {
    creator: "u1",
    name: "Aladin Goliam Molia",
    email: "changa@chunga.diuner",
    cart: [],
  },
];

const FAKE_CART = [
  {
    creator: "u1",
    title: "Cart item 1",
    price: 9.99,
    description: "item 1 description",
    amount: 1,
  },
  {
    creator: "u1",
    title: "Cart item 2",
    price: 5.55,
    description: "item 2 description",
    amount: 1,
  },
];

const getUserById = (req, res, next) => {
  const { userId } = req.params;
  const user = FAKE_USERS.find(u => u.creator === userId);

  if (!user) {
    throw new HttpError(404, "Could not find a user for the provided user id.");
  }

  res.json({ user });
};

const createCart = (req, res, next) => {
  const { title, description, price, amount, creator } = req.body;
  const createdCart = {
    id: uuidv4(),
    title,
    description,
    price,
    amount,
    creator,
  };

  FAKE_CART.push(createdCart);
  FAKE_USERS[0].cart.push(FAKE_CART);

  res.status(201).json({ cart: createdCart });
};

exports.getUserById = getUserById;
exports.createCart = createCart;
