const router = require("express").Router();
const controller = require("../controller/user");

// UPDATE USER
router.post("/:userId", controller.updateUser);

// DELETE USER

module.exports = router;
