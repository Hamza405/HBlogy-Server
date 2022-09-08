const express = require("express");
const mongoose = require("mongoose");
const app = express();
mongoose
  .connect("mongodb://localhost:27017/hblogy")
  .then(() => console.log("Connected DataBase"))
  .catch((err) => console.log(err));
app.use(express.json());

const authRouter = require("./routes/auth");
app.use("/api", authRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
