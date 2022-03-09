var express = require("express");
const db = require("../database/db");
var router = express.Router();

router.get("/", function (req, res, next) {
  const query = "SELECT * FROM tasks";
  db.query(query, (err, response) => {
    if (err) throw err;
    res.send(response);
  });
});

module.exports = router;
