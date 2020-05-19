const { Router } = require("express");
const { check } = require("express-validator");

const usersController = require("../controllers/users-controller");

const router = Router();

//---------- GET ----------\\
router.get("/", usersController.getUsers);

router.get("/:userId", usersController.getUserById);

//---------- POST ----------\\
router.post(
  "/signup",
  [
    check("first_name").not().isEmpty(),
    check("last_name").not().isEmpty(),
    check("address").not().isEmpty(),
    check("email").normalizeEmail().isEmail(),
    check("password").isLength({ min: 6 }),
  ],
  usersController.signup
);

router.post(
  "/login",
  [check("email").isEmail(), check("password").isLength({ min: 5 })],
  usersController.login
);

//---------- PATCH ----------\\
router.patch("/:userId/cart", usersController.updateCart);

//---------- DELETE ----------\\
router.delete("/:userId/cart", usersController.deleteCart);

module.exports = router;
