const router = require("express").Router();
const controller = require("../controller/auth");

// REGISTER
router.post("/register", controller.register);
// LOGIN

module.exports = router;
