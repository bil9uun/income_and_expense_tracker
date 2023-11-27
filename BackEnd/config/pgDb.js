const postgres = require("postgres");
const dotenv = require("dotenv");

dotenv.config();

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;

module.exports.sql = postgres({
  host: PGHOST,
  database: PGDATABASE,
  username: PGUSER,
  password: PGPASSWORD,
  port: 5432,
  ssl: "require",
  connection: {
    options: `project=${ENDPOINT_ID}`,
  },
});
