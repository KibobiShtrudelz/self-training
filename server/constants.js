const MONGO = {
  url:
    "mongodb+srv://xxxtracookie:Snuki1990!@dime-bebe-website-xeqzy.mongodb.net/dime-store?retryWrites=true&w=majority",
};

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

module.exports = {
  MONGO,
  FAKE_USERS,
};
