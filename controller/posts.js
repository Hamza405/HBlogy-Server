const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require("bcrypt");

exports.createPost = async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.editPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    if (post.userName === req.body.userName) {
      try {
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.postId,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedPost);
      } catch (err) {
        res.status(500).json({ error: err });
      }
    } else {
      res.status(401).json({ error: "You can update only your posts!" });
    }
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    if (post.userName === req.body.userName) {
      try {
        await post.delete();
        res.status(200).json({ message: "Post has been deleted" });
      } catch (err) {
        res.status(500).json({ error: err });
      }
    } else {
      res.status(401).json({ error: "You can delete only your posts!" });
    }
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
  } catch (err) {
    res.status(500).json({ error: err });
  }
};