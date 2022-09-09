const Category = require("../models/Category");

exports.addCategory = async (req, res) => {
  try {
    const newCategory = new Category(req.body);
    const savedCategory = await newCategory.save();
    res.status(200).json(savedCategory);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

// exports.removeCategory = async (req, res) => {
//   try {
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: err });
//   }
// };

exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
};
