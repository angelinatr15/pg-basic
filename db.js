const Pool = require("Pg").Pool;
const pool = new Pool({
  user: "postgres",
  password: "4311",
  database: "todo_database",
  host: "localhost",
  port: 5432,
});

module.exports = pool;
