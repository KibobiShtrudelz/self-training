const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
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
});

module.exports = mongoose.model("Cart", cartSchema);
