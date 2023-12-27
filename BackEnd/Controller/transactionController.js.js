const { sql } = require("../config/pgDb");

const getAllTransaction = async (req, res) => {
  const userId = "22e7e357-8b12-4bd2-952e-33586a423080";
  try {
    const transactions =
      await sql`SELECT tr.name, tr.amount, tr.created_at, tr.id, tr.transaction_type, ct.name, ct.category_color FROM transaction tr INNER JOIN category ct ON tr.category_id=ct.id WHERE tr.user_id=${userId} ORDER BY created_at DESC`;

    res.status(200).json({ message: "success", transactions });
  } catch (error) {
    console.log("ERR", error);
    res.status(500).json({ message: "failed " });
  }
};

const createTransaction = async (req, res) => {
  try {
    console.log("TRANSACTION-POST");
    const {
      categoryId,
      amount,
      transaction_type,
      description,
      transaction_name,
      updated_at,
      userId,
    } = req.body;

    console.log(req.body);
    console.log(userId, "useridpost");

    const data =
      await sql`INSERT INTO transaction(user_id, category_id, name, amount, description, transaction_type, updated_at) VALUES(${userId}, ${categoryId}, ${transaction_name}, ${amount}, ${description}, ${transaction_type}, ${updated_at}) RETURNING *`;
    res.status(201).json({ message: "success", transaction: data[0] });
  } catch (error) {
    console.log("ERR", error);
    res.status(500).json({ message: "failed" });
  }
};

const getTotalIncomeExpense = async (req, res) => {
  try {
    const { userId } = req.body;
    const data =
      await sql`SELECT transaction_type, SUM(amount) as total FROM transaction GROUP BY transaction_type`;
    console.log(data, "datatotal");
    const exp = data.filter((el) => {
      el.transaction_type === "EXP";
    })[0].total;
    const inc = data.filter((el) => {
      el.transaction_type === "INC";
    })[0].total;
  } catch (error) {}
};

module.exports = {
  createTransaction,
  getAllTransaction,
  getTotalIncomeExpense,
};
