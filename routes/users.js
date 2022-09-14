const router = require("express").Router();
const controller = require("../controller/users");
const User = require("../models/User");

// UPDATE USER
router.put("/:userId", controller.updateUser);

// DELETE USER
router.delete("/:userId", controller.deleteUser);

// GET USER INFO
router.get("/:userId", controller.getUser);

module.exports = router;
