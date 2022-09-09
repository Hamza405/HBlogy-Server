const router = require("express").Router();
const controller = require("../controller/posts");

// CREATE POST
router.post("/", controller.createPost);

// EDIT POST
router.put("/:postId", controller.editPost);

// DELETE POST
router.delete("/:postId", controller.deletePost);

// GET POSTS
router.get("/:postId", controller.getPost);

module.exports = router;
