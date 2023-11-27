const express = require("express");
const cors = require("cors");

const { sql } = require("./config/pgDb");

const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  try {
    const result = await sql`SELECT * FROM employee LIMIT(5)`;
    console.log("Result", { result });
  } catch (error) {
    res.send("Aldaa garlaa dahin oroldono uu" + error);
  }
  res.send("Hi");
});

app.listen(PORT, () => console.log(`Server is listening at ${PORT} port`));
