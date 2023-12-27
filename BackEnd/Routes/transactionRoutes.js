const { Router } = require("express");
const {
  createTransaction,
  getAllTransaction,
  getTotalIncomeExpense,
} = require("../Controller/transactionController.js");

const router = Router();

router.route("/").post(createTransaction).get(getAllTransaction);
router.route("/total").get(getTotalIncomeExpense);

module.exports = router;
