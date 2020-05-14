const { Schema, Types, model } = require("mongoose");

const cartSchema = new Schema({
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
  creator: {
    type: Types.ObjectId,
    required: true,
    ref: "User",
  },
});

module.exports = model("Cart", cartSchema);
