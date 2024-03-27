const express = require("express");
const { User } = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { BlacklistToken } = require("../models/blacklist.model");
require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRET;

const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
  const { email, password, confirmPassword, isAdmin } = req.body;
  try {
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords doesn't match" });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res
        .status(400)
        .json({ message: "User with this email is already exists." });
    }
    bcrypt.hash(password, 5, async function (err, hash) {
      if (err) {
        return res.status(400).json({error: err});
      } else {
        const newUser = new User({ email, password: hash, isAdmin });
        await newUser.save();
        res.status(201).json({ message: "Registered Successfully." });
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      bcrypt.compare(password, user.password, function (err, result) {
        if (result) {
          const token = jwt.sign({ userID: user._id }, JWT_SECRET);
          return res.status(201).send({ message: "Logged in", token });
        } else {
          res.status(400).send({ message: "Invalid Credentials" });
        }
      });
    } else {
      res.status(400).json({ message: "Invalid Credentials" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message});
  }
});

// user Logout
userRouter.get('/logout',async(req,res)=>{
  const token = req.headers.authorization?.split(" ")[1];
  try{
   const blacklist= new BlacklistToken({token});
   await blacklist.save();
   res.status(200).json({message:"Logged out"});
  }
  catch(err){
      res.status(400).json({error:err})
  }
  
})

module.exports = {
  userRouter,
};
