const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");

const authRouter = require("./routes/auth");
const userRouter = require("./routes/users");
const postRouter = require("./routes/posts");
const categoriesRouter = require("./routes/categories");

const app = express();
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/hblogy")
  .then(() => console.log("Connected DataBase"))
  .catch((err) => console.log(err));

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "images");
  },
  filename: (req, file, callback) => {
    callback(null, "hello.jpeg");
  },
});

const upload = multer({ storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

app.use("/api", authRouter);
app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);
app.use("/api/categories", categoriesRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
