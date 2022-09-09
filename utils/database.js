const mongoose = require("mongoose");

const mongooseConnect = () => {
  return mongoose
    .connect("mongodb://localhost:27017/hblogy")
    .then(() => console.log("Database Connected"))
    .catch((err) => console.log(err));
};

exports.mongooseConnect = mongooseConnect;
