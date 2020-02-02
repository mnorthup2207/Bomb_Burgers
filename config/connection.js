// Set up MySQL connection.
var mysql = require("mysql");
var connection;

if(process.env.JAWSBD_URL) {
    connection = mysql.createConnection(process.env.JAWSBD_URL);
} else {
 connection = mysql.createConnection({
  host: "icopoghru9oezxh8.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "cv9i8apj627gez8r",
  password: "xxd75nmzsnay1tkj",
  database: "o6b4ktr1i1j5nylj"
});
}

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
