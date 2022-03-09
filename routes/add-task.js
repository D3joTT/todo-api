const express = require("express");
const router = express.Router();
const db = require("../database/db");

router.post("/", (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const query = `INSERT INTO tasks (title, description) VALUES ('${title}', '${description}')`;
  db.query(query, (err) => {
    if (err) throw err;
    console.log("Task added!");
  });
  res.send(`${title} | ${description}`);
});

module.exports = router;
