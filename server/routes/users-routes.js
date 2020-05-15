const { Router } = require("express");
const { check } = require("express-validator");

const usersController = require("../controllers/users-controller");
const cartsController = require("../controllers/carts-controller");

const router = Router();

// GET \\
router.get("/", usersController.getUsers);

router.get("/:userId/cart", cartsController.getCartById);

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

router.post("/:userId/cart", cartsController.createCart);

// PATCH \\
router.patch("/:userId/cart", cartsController.updateCart);

// DELETE \\
router.delete("/:userId/cart", cartsController.deleteCartById);

module.exports = router;
