const { Router } = require("express");
const { getAllCategory } = require("../Controller/categoryController");

const router = Router();

router.route("/").get(getAllCategory);

module.exports = router;
