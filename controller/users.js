const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.updateUser = async (req, res) => {
  const token = req.headers.authorization.split(" ")[1];
  if (!token) {
    res.status(400).json({ error: "You are not registered" });
  }
  const decodedToken = jwt.verify(token, "MySecretKey");
  if (decodedToken.userId === req.params.userId) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }

    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.userId,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json({ error: err });
    }
  } else {
    res.status(401).json({ error: "You can update only your account!" });
  }
};

exports.deleteUser = async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    res.status(400).json({ error: "You are not registered" });
  }
  const decodedToken = jwt.verify(token, "MySecretKey");
  if (decodedToken.userId === req.params.userId) {
    try {
      const user = await User.findById(req.params.userId);
      try {
        if (user) {
          await Post.deleteMany({ userName: user.userName });
        }
        await User.findByIdAndRemove(req.params.userId);
        res.status(200).json({ message: "User has been deleted" });
      } catch (err) {
        res.status(500).json({ error: err });
      }
    } catch (err) {
      res.status(404).json({ error: "User not found!" });
    }
  } else {
    res.status(401).json({ error: "You can delete only your account!" });
  }
};

exports.getUser = async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    res.status(400).json({ error: "You are not registered" });
  }
  const decodedToken = jwt.verify(token, "MySecretKey");
  try {
    if (decodedToken.userId === req.params.userId) {
      const user = await User.findById(req.params.userId);
      const { password, ...others } = user._doc;
      res.status(200).json(others);
    } else {
      res.status(401).json({ error: "You can modify only your account!" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
};
