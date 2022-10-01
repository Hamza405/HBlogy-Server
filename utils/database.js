const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const mongooseConnect = () => {
  return (
    mongoose
      .connect("mongodb://localhost:27017/hblogy")
      // .connect(
      //   process.env.DATABASE_CLUSTER
      // )
      .then(() => console.log("Database Connected"))
      .catch((err) => console.log(err))
  );
};

exports.mongooseConnect = mongooseConnect;
