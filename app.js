const express = require("express");
const mongoose = require("mongoose");
const app = express();

console.log("dddd");
app.get("/", (req, res) => res.send("Test"));

mongoose
  .connect("mongodb://localhost:27017")
  .then(() => console.log("Connected DataBase"))
  .catch((err) => console.log(err));

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
