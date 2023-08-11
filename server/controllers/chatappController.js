const mongoose = require("mongoose");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const bcryptSalt = bcrypt.genSaltSync(10);

const register = async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, bcryptSalt);
  try {
    const user = await User.create({
      username: username,
      password: hashedPassword,
    });
    jwt.sign(
      { userId: user._id, username },
      process.env.JWT_SECRET,
      {},
      (err, token) => {
        if (err) throw err;
        res.cookie("token", token).status(201).json({
          id: user._id,
        });
      }
    );
  } catch (err) {
    res.status(500).json("error");
  }
};

// Login API
const login = async (req, res) => {
  const { username, password } = req.body;
  const foundUser = await User.findOne({ username });
  if (foundUser) {
    const passOk = bcrypt.compareSync(password, foundUser.password);
    if (passOk) {
      jwt.sign(
        { userId: foundUser._id, username },
        process.env.JWT_SECRET,
        {},
        (err, token) => {
          if (err) throw err;
          res.cookie("token", token).status(201).json({
            id: foundUser._id,
          });
        }
      );
    } else {
      res.status(401).json("Unauthorized");
    }
  }
};

const profile = (req, res) => {
  const token = req.cookies?.token;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, {}, (err, userData) => {
      if (err) throw err;
      res.json(userData);
    });
  } else {
    res.status(401).json("no token");
  }
};

module.exports = {
  register,
  login,
  profile,
};
