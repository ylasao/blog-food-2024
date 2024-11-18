const Author = require("./Author");
const Category = require("./Category");
const Comment = require("./Comment");
const Direction = require("./Direction");
const Ingredients = require("./Ingredients");
const LikeDislike = require("./LikeDislike");
const MediaGallery = require("./mediaGallery");
const Post = require("./Post");
const PostView = require("./PostView");
const Rating = require("./Rating");
const Tag = require("./Tag");
const User = require("./User");
const VideoPost = require("./VideoPost");
const PostCategory = require("./PostCategory");
const PostTags = require('./PostTags')
const rootModel = {
  Author,
  Category,
  Comment,
  Direction,
  Ingredients,
  LikeDislike,
  MediaGallery,
  Post,
  PostView,
  Rating,
  Tag,
  User,
  VideoPost,
  PostCategory
};

module.exports = rootModel;
