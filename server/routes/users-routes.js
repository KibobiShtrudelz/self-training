const express = require("express");

const usersController = require("../controllers/users-controller");

const router = express.Router();

router.get("/:userId", usersController.getUserById);

router.post("/", usersController.createCart);

module.exports = router;
