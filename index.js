const express = require("express");
const { database } = require("pg/lib/defaults");
const app = express();
const pool = require("./db");
app.use(express.json());

app.post("/todos", async (req, res) => {
  try {
    const description = req.body.description;
    console.log(description);
    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES ($1) RETURNING * ",
      [description]
    );
    res.json(newTodo);
  } catch (e) {
    console.log(e.message);
  }
});

app.delete("/todos/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const newTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [
      id,
    ]);
    res.json(newTodo);
  } catch (e) {
    console.log(e.message);
  }
});

app.listen(5000, () => {
  console.log("App is listening to port 5000");
});

/*

user -> google.com -> backend (query the database) -> database

databse -> backend -> front end -> user

*/
