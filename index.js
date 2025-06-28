const express=require('express');
const cors=require('cors');
require('dotenv').config()

const mongoose = require("mongoose");

const app=express();
const PORT=process.env.PORT|| 5000;
const User=require('./models/User')

//Middleware
app.use(cors());
app.use(express.json());


const userRoutes = require("./routes/userRoutes");
app.use("/api", userRoutes);

// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("MongoDB connected"))
//   .catch(err => console.log("MongoDB error:", err));
// moved this code to config folder-->db.js
  const connectDB = require("./config/db");
connectDB();



//routes
// app.post("/api/login", async (req,res)=>{
//   const { username, password } = req.body;
//   const username1=req.body.username;
//   const password1=req.body.password;
//   console.log("username1"+username1);
//   console.log("password1"+password1);
//
//
//
//
//
//   try {
//      const newUser = new User({ username, password });
//       await newUser.save();
//      res.json({ success: true, message: "User saved to MongoDB" });
//    } catch (err) {
//      console.error("❌ Save error:", err);
//      res.status(500).json({ success: false, message: "Failed to save user" });
//    }
//  });
//
//
// app.get('/api/users', async (req,res)=>{
//   try {
//      const users = await User.find(); // Fetch all users from MongoDB
//      res.json(users); // Send the users as response
//    } catch (err) {
//      res.status(500).json({ success: false, message: 'Error fetching users', error: err });
//    }
// })

// moved these logic to routes filder--> userRoutes


app.listen(PORT, ()=>{
  console.log("Backend is running at"+PORT);
});
