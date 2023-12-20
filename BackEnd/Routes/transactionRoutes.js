const { Router } = require("express");
const {
  createTransaction,
  getAllTransaction,
} = require("../Controller/transactionController.js");

const router = Router();

router.route("/transaction").post(createTransaction).get(getAllTransaction);

module.exports = router;
