const mysql = require("mysql");

const con = mysql.createConnection({
  host: "192.168.64.2",
  user: "todo",
  password: "[j!LA(GXxT9Nl379",
  database: "todo_tasks",
});

con.connect(function (err) {
  const sql =
    "CREATE TABLE IF NOT EXISTS tasks (id INT NOT NULL AUTO_INCREMENT, title VARCHAR(128), description VARCHAR(255), PRIMARY KEY (id))";
  con.query(sql, function (err, result) {
    if (err) throw err;
  });
  console.log("Connected!");
});

module.exports = con;
