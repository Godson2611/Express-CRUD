/** @format */

const mongoose = require("mongoose");
// const DB = require("../config/dbConfig");
require("dotenv").config();

try {
  console.log(process.env.dbUrl, process.env.dbName, "\n");
  // mongoose.connect(`${DB.dbUrl}/${DB.dbName}`);
  mongoose.connect(`${process.env.dbUrl}/${process.env.dbName}`);
  // console.log("Database connected Successfully");
} catch (error) {
  console.log(error);
}

module.exports = mongoose;
