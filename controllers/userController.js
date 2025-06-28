const User = require("../models/User");

// Handle login
const loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const newUser = new User({ username, password });
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
