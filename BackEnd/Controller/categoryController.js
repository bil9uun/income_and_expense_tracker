const { sql } = require("../config/pgDb");

const category = async (req, res) => {
  try {
    await sql`INSERT INTO category (name, description,category_image, category_color) VALUES (${"name"},${"description"},${"category_image"}, ${"category_color"})`;
    res.status(201).json({ message: "success" });
  } catch (error) {
    res.status(500).json({ message: "amjiltgui bollo" + error });
  }
};

module.exports = { category };
