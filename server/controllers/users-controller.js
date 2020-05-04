const HttpError = require("../models/http-error");

const getUserById = (req, res, next) => {
  const FAKE_USER_CART = [
    {
      creator: "u1",
      itemsInCartCount: 2,
      itemsInCart: [
        {
          title: "Cart item 1",
          price: 9.99,
          description: "item 1 description",
        },
        {
          title: "Cart item 2",
          price: 5.55,
          description: "item 2 description",
        },
      ],
    },
  ];
  const userId = req.params.uid;
  const cart = FAKE_USER_CART.find(u => u.creator === userId);

  if (!cart) {
    throw new HttpError(404, "Could not find a cart for the provided user id.");
  }

  res.json({ cart });
};

exports.getUserById = getUserById;
