// Write a query to get the user and their password from the database
const dbConnection = require("../db_connection");

module.exports = cb => {
  dbConnection.query("select * from users", (error, result) => {
    if (error) return cb(error);
    cb(null, JSON.stringify(result.rows));
  });
};
