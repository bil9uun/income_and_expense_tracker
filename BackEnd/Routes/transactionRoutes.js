const { Router } = require("express");
const { transaction } = require("../Controller/transactionController.js");

const router = Router();

router.route("/transaction").post(transaction);

module.exports = router;
