const { Router } = require("express");
const { signUp } = require("../Controller/authController");

const router = Router();

router.route("/signup").post(signUp);

module.exports = router;
