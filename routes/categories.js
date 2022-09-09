const router = require("express").Router();
const controller = require("../controller/categories");

// ADD CATEGORY
router.post("/", controller.addCategory);

// REMOVE CATEGORY
// router.delete("/:catId", controller.removeCategory);

// FETCH CATEGORIES
router.get("/", controller.getCategories);

module.exports = router;
