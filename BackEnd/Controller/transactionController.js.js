const { sql } = require("../config/pgDb");

const transaction = async (req, res) => {
  try {
    const { name, amount, description, category_id, user_id } = req.body;
    await sql`INSERT INTO transaction (name, amount,description,user_id,category_id) VALUES (${name}, ${amount},${description},${user_id},${category_id})`;
    res.status(201).json({ message: "success" });
  } catch (error) {
    res.status(500).json({ message: "amjiltgui bollo" + error });
  }
};

module.exports = { transaction };
