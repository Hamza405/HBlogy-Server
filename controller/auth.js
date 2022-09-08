const User = require("../models/User");
const bcrypt = require("bcrypt");

exports.register = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      userName: req.body.userName,
      email: req.body.email,
      password: hashPassword,
      profilePicture: req.body.profilePicture,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ userName: req.body.userName });
    !user && res.status(400).json({ error: "User not found" });

    const validate = await bcrypt.compare(req.body.password, user.password);
    !validate && res.status(400).json({ error: "Wrong Password!" });

    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
};
