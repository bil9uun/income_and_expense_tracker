const { Router } = require("express");
const { category } = require("../Controller/categoryController");

const router = Router();

router.route("/category").post(category);

module.exports = router;
