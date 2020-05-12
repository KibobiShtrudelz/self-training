const MongoClient = require("mongodb").MongoClient;
const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");
const { validationResult } = require("express-validator");

const HttpError = require("../models/http-error");
const { mongo, FAKE_USERS } = require("../constants");

const User = require("../models/user-model");

mongoose
  .connect(mongo.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to database"))
  .catch(() => console.log("Connection failed!"));

// const getUsers = async (req, res, next) => {
//   const client = new MongoClient(mongo.url, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });

//   let users;

//   try {
//     await client.connect();

//     const db = client.db();

//     users = await db.collection("users").find().toArray();
//   } catch (error) {
//     return res.json({ message: "Could not retrieve users." });
//   }

//   client.close();

//   res.json(users);
// };

const getUsers = async (req, res, next) => {
  const users = await User.find().exec();
  res.json(users);
};

// const signup = async (req, res, next) => {
//   const errors = validationResult(req);

//   if (!errors.isEmpty()) {
//     throw new HttpError(422, "Invalid inputs passed.");
//   }

//   const { name, email, password } = req.body;

//   const hasUser = FAKE_USERS.find(user => user.email === email);

//   if (hasUser) {
//     throw new HttpError(422, "E-mail already exists!");
//   }

//   const createUser = {
//     id: uuidv4(),
//     name,
//     email,
//     password,
//     cart: [
//       {
//         cartItems: [],
//       },
//     ],
//   };

//   FAKE_USERS.push(createUser);

// const client = new MongoClient(mongo.url, {
//   useUnifiedTopology: true,
//   useNewUrlParser: true,
// });

//   try {
//     await client.connect();
//     const db = client.db();
//     const result = await db.collection("users").insertOne(createUser);
//   } catch (error) {
//     return res.json({ message: "Could not store data." });
//   }

//   client.close();

//   res.status(201).json(createUser);
// };

const signup = async (req, res, next) => {
  const createdUser = new User({
    creator: uuidv4(),
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
    cart: {
      cartItems: [],
    },
  });

  const result = await createdUser.save();

  res.json(result);
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
