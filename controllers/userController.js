const User = require("../models/User");


const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;
const EXPIRES_IN = process.env.JWT_EXPIRES_IN || '1h';
// Handle login
const loginUser = async (req, res) => {
  const  username=req.body.username;
  const password=req.body.password;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const newUser = new User({ username, hashedPassword });
    await newUser.save();
    res.json({ success: true, message: "User saved to MongoDB" });
  } catch (err) {
    console.error("❌ Save error:", err);
    res.status(500).json({ success: false, message: "Failed to save user" });
  }
};

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ success: false, message: "Error fetching users", error: err });
  }
};

module.exports = { loginUser, getAllUsers };
