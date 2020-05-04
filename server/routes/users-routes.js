const express = require("express");

const usersController = require("../controllers/users-controller");

const router = express.Router();

// this route is responsible for user's cart
router.get("/:uid", usersController.getUserById);

module.exports = router;
