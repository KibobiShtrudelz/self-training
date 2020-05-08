const { Router } = require("express");
const { check } = require("express-validator");

const usersController = require("../controllers/users-controller");

const router = Router();

// GET \\
router.get("/", usersController.getUsers);

router.get("/:userId", usersController.getUserById);

router.get("/:userId/cart", usersController.getCartById);

// POST \\
router.post(
  "/signup",
  [
    check("first_name").not().isEmpty(),
    check("last_name").not().isEmpty(),
    check("email").normalizeEmail().isEmail(),
    check("password").isLength({ min: 6 }),
    check("address").not().isEmpty(),
  ],
  usersController.signup
);

router.post(
  "/login",
  [check("email").isEmail(), check("password").isLength({ min: 5 })],
  usersController.login
);

router.post("/:userId/cart", usersController.createCart);

// PATCH \\
router.patch("/:userId/cart", usersController.updateCart);

// DELETE \\
router.delete("/:userId/cart", usersController.deleteCartById);

module.exports = router;
