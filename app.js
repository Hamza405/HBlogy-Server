const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose
  .connect("mongodb://localhost:27017/hblogy")
  .then(() => console.log("Connected DataBase"))
  .catch((err) => console.log(err));
app.use(express.json());

const authRouter = require("./routes/auth");
const userRouter = require("./routes/users");
const postRouter = require("./routes/posts");
const categoriesRouter = require("./routes/categories");

app.use("/api", authRouter);
app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);
app.use("/api/categories", categoriesRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
