const express = require("express");
const cors = require("cors");
const path = require("path");
const awsS3 = require("./utils/s3");

const authRouter = require("./routes/auth");
const userRouter = require("./routes/users");
const postRouter = require("./routes/posts");
const categoriesRouter = require("./routes/categories");
const storage = require("./utils/storage");

// Connecting Database
require("./utils/database").mongooseConnect();

const app = express();
app.use(cors());
app.options("*", cors());
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "images")));

app.use("/api", authRouter);
app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);
app.use("/api/categories", categoriesRouter);

app.post("/api/upload", storage.upload.single("file"), storage.uploadFunction);
app.get("/s3url", async (req, res) => {
  const url = awsS3.generateUploadURL();
  res.send({ url });
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
