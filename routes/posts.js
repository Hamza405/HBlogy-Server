const router = require("express").Router();
const controller = require("../controller/posts");

// CREATE POST
router.post("/", controller.createPost);

// UPDATE POST
// router.delete("/:userId", controller.deleteUser);

// DELETE POST
// router.get("/:userId", controller.getUser);

// GET POSTS

module.exports = router;
