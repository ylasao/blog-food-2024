const express = require("express");

const Post = express.Router();
const MiddlewareController = require("../controller/Middleware");
Post.get("/viewAllPost", MiddlewareController.verifyToken, (req, res) => {
  const userId = req.user.id;
  res.json({ message: `View All post by ${userId}` });
});

module.exports = Post;
