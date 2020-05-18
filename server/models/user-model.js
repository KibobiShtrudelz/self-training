const { Schema, Types, model } = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = new Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  cart: {
    type: Array,
    required: true,
    cartItems: Array({
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      amount: {
        type: Number,
        required: true,
      },
    }),
    cartItemsCount: {
      type: String,
      required: true,
    },
    cartItemsTotalPrice: {
      type: Number,
      required: true,
    },
  },
});

// this package cheks if user's mail already exists in base
userSchema.plugin(uniqueValidator);

module.exports = model("User", userSchema);
