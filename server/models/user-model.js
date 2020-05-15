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
  cart: [
    {
      type: Types.ObjectId,
      required: true,
      ref: "Cart",
    },
  ],
});

// this package cheks if user's mail already exists in base
userSchema.plugin(uniqueValidator);

module.exports = model("User", userSchema);
