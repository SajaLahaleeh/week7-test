// Write a query to add the user and their password to the database
const dbConnection = require("../db_connection");

const addUser = ({ email, password }, cb) => {
  dbConnection.query(
    "insert into users (email,password) values ($1,$2)",
    [email, password],
    (err, res) => {
      if (err) {
        cb(err);
      } else cb(null, { msg: "success" });
    }
  );
  module.exports = addUser;
