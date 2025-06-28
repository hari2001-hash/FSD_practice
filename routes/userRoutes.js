//
// const express = require("express");
// const router = express.Router();
// const User = require("../models/User");
//
// // POST /api/login
// router.post("/login", async (req, res) => {
//   const { username, password } = req.body;
//
//   try {
//     const newUser = new User({ username, password });
//     await newUser.save();
//     res.json({ success: true, message: "User saved to MongoDB" });
//   } catch (err) {
//     console.error("❌ Save error:", err);
//     res.status(500).json({ success: false, message: "Failed to save user" });
//   }
// });
//
// // GET /api/users
// router.get("/users", async (req, res) => {
//   try {
//     const users = await User.find();
//     res.json(users);
//   } catch (err) {
//     res.status(500).json({ success: false, message: "Error fetching users", error: err });
//   }
// });
//
// module.exports = router; // ✅ Important!
// moved the logic to controller folder--> userController.js

const express = require("express");
const router = express.Router();

const { loginUser, getAllUsers } = require("../controllers/userController");

router.post("/login", loginUser);
router.get("/users", getAllUsers);

module.exports = router;
