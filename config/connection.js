var mysql = require("mysql2");
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "dlrldnr1",
    database: "project2DB"
    });
}

connection.connect();
module.exports = connection;
