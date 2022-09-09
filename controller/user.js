const User = require("../models/User");
const bcrypt = require("bcrypt");

exports.updateUser = async (req, res) => {
  if (req.body.userId === req.params.userId) {
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
