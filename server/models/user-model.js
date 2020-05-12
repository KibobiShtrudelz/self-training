const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  creator: {
    type: String,
    required: true,
  },
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  cart: {
    cartItems: Array({}),
  },
});

module.exports = mongoose.model("User", userSchema);
