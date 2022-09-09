const router = require("express").Router();
const controller = require("../controller/users");

// UPDATE USER
router.post("/:userId", controller.updateUser);

// DELETE USER
router.delete("/:userId", controller.deleteUser);

module.exports = router;
