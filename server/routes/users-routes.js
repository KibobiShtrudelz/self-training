const express = require("express");

const usersController = require("../controllers/users-controller");

const router = express.Router();

router.get("/", usersController.getUsers);

router.post("/signup", usersController.signup);

router.post("/login", usersController.login);

router.get("/:userId", usersController.getUserById);

router.get("/:userId/cart", usersController.getCartById);

router.post("/:userId/cart", usersController.createCart);

router.patch("/:userId/cart", usersController.updateCart);

router.delete("/:userId/cart", usersController.deleteCartById);

module.exports = router;
