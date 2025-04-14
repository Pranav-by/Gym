const express = require("express");
const router = express.Router();

const {
  registerGymUser,
  loginGymUser,
  forgotPassword,
  resetPassword,
} = require("../Controllers/gym");

// Register route
router.post("/register", registerGymUser);

// Login route
router.post("/login", loginGymUser);

// Forgot Password route
router.post("/forgot-password", forgotPassword);

// Reset Password route
router.post("/reset-password", resetPassword);

module.exports = router;
