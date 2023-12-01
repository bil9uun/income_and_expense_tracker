const { sql } = require("../config/pgDb");
const bcrypt = require("bcrypt");

const signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    await sql`INSERT INTO users(email,name,password) VALUES(${email},${name},${hashedPassword})`;
    res.status(201).json({ message: "success" });
  } catch (error) {
    res.status(500).json({ message: "amjiltgui bollo" + error });
  }
};

module.exports = { signUp };
