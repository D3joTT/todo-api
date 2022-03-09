var express = require("express");
const db = require("../database/db");
var router = express.Router();

router.post("/", function (req, res, next) {
  const id = req.body.id;
  const query = `DELETE FROM tasks WHERE id=${id}`;
  db.query(query, (err) => {
    if (err) throw err;
    console.log(`Task ${id} deleted`);
  });
  res.send(`deleted task with id ${id}`);
  ``;
});

module.exports = router;
