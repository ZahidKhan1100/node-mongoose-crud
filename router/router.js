const express = require("express");
const CategoryController = require("../controller/CategoryController");

const router = express.Router();

router.route("/getCategories").get(CategoryController.getCategories);
router.route("/insertCategory").post(CategoryController.insertCategory);
router.route("/updateCategory").put(CategoryController.updateCategory);




module.exports = router;
