const { Router } = require("express");
const {
  createTransaction,
  getAllTransaction,
  getTotalIncomeExpense,
  getChartData,
} = require("../Controller/transactionController.js.js");

const router = Router();

router.route("/chartdata/:userId").get(getChartData);
router.route("/").post(createTransaction).get(getAllTransaction);
router.route("/total").get(getTotalIncomeExpense);

module.exports = router;
