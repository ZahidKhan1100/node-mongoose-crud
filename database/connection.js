const mongoose = require("mongoose");

const database = "mongodb://localhost:27017/pos";

const connectDB = async () => {
  await mongoose
    .connect(database)
    .then(() => {
      console.log("connection successfull");
    })
    .catch((err) => {
      console.log("error", err);
    });
};

module.exports = connectDB;
