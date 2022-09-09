const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "images");
  },
  filename: (req, file, callback) => {
    callback(null, "hello.jpeg");
  },
});

const upload = multer({ storage });

const uploadFunction = (req, res) => {
  res.status(200).json("File has been uploaded");
};

exports.upload = upload;
exports.uploadFunction = uploadFunction;
