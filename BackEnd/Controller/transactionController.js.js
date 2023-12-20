const { sql } = require("../config/pgDb");

const getAllTransaction = async (req, res) => {};

const createTransaction = async (req, res) => {
  try {
    console.log("TRANSACTION-POST");
    const {
      userId,
      categoryId,
      amount,
      transaction_type,
      description,
      transaction_name,
      updated_at,
    } = req.body;

    console.log(req.body);

    const data =
      await sql`INSERT INTO transactions(user_id, category_id, name, amount, description, transaction_type, updated_at) VALUES(${userId}, ${categoryId}, ${transaction_name}, ${amount}, ${description}, ${transaction_type}, ${updated_at}) RETURNING *`;
    res.status(201).json({ message: "success", transaction: data[0] });
  } catch (error) {
    console.log("ERR", error);
    res.status(500).json({ message: "failed" });
  }
};

module.exports = { createTransaction, getAllTransaction };
