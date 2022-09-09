const router = require("express").Router();
const controller = require("../controller/posts");

// CREATE POST
router.post("/", controller.createPost);

// EDIT POST
router.put("/:postId", controller.editPost);

// DELETE POST
router.delete("/:postId", controller.deletePost);

// GET POST
router.get("/:postId", controller.getPost);

// GET ALL POSTS
router.get("/", controller.getPosts);

module.exports = router;
