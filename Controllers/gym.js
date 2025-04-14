const GymUser = require("../Models/gym");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
require("dotenv").config();

// Replace with your real email and app password
const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;

// 📌 Register Gym User
exports.registerGymUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const userExists = await GymUser.findOne({ email });
    if (userExists) return res.status(400).json({ message: "Email already registered" });

    const newUser = await GymUser.create({ username, email, password });
    res.status(201).json({ message: "User registered successfully", user: newUser.username });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 🔐 Login Gym User
exports.loginGymUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await GymUser.findOne({ email }).select("+password");

    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

    // Successful login (no JWT, just return success message)
    res.json({ message: "Login successful", user: user.username });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 🛠️ Forgot Password - Send OTP
exports.forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await GymUser.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpExpires = new Date(Date.now() + 10 * 60 * 1000); // expires in 10 min

    user.resetOTP = otp;
    user.otpExpiresAt = otpExpires;
    await user.save();

    // Send OTP Email
    await sendOTPEmail(email, otp);

    res.json({ message: "OTP sent to your email" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 🔁 Reset Password with OTP
exports.resetPassword = async (req, res) => {
  try {
    const { email, otp, newPassword } = req.body;
    const user = await GymUser.findOne({ email });

    if (!user || user.resetOTP !== otp || user.otpExpiresAt < Date.now()) {
      return res.status(400).json({ message: "Invalid or expired OTP" });
    }

    // Update password
    user.password = newPassword;
    user.resetOTP = null;
    user.otpExpiresAt = null;

    await user.save();

    res.json({ message: "Password reset successful" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Utility to send OTP via email using Nodemailer
const sendOTPEmail = async (to, otp) => {
    const transporter = nodemailer.createTransport({
      service: "gmail",  // Using Gmail service
      auth: {
        user: process.env.EMAIL_USER,  // Your Gmail address
        pass: process.env.EMAIL_PASS,  // Your app password
      },
    });
  
    const mailOptions = {
      from: process.env.EMAIL_USER,  // Your Gmail address
      to,                             // Recipient email
      subject: "Your FitTrack OTP Code",
      text: `Your OTP is: ${otp}. It is valid for 10 minutes.`,
    };
  
    // Send the email
    await transporter.sendMail(mailOptions);
  };
  