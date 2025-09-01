const express = require("express");
const {
  loginController,
  registerController,
  logoutController,
} = require("../controllers/AuthController");
const router = express.Router();

router.post("/register", registerController);
router.post("/login", loginController);
router.post("/logout", logoutController);

module.exports = router;
