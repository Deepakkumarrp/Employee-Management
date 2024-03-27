const jwt = require('jsonwebtoken');
require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRET;
const { User } = require("../models/user.model");
const { BlacklistToken } = require('../models/blacklist.model');

const auth = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  try {
  const findToken = await BlacklistToken.findOne({token})
    if(findToken){
        return res.status(400).send({ message: "You have been logged out, Please log in again."})
    }
    if (token) {
      jwt.verify(token, JWT_SECRET, async (err, decoded) => {
        if (decoded) {
          const { userID } = decoded;
          const user = await User.findOne({ _id: userID });
          const require_role = user.isAdmin ? "Admin":"User";
          req.userID = userID;
          req.role = require_role;
          next();
        } else {
          res.status(400).json({ message: "You're not logged in.", error : err });
        }
      })
    } else {
      res.status(404).json({ message: "You're not logged in. Token Missing.", error : err });
    }
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  auth,
};
