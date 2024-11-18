const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const PostTags = sequelize.define(
  "PostTags",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    postId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Post",
        key: "id"
      }
    },
    tagId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Tag",
        key: "id"
      }
    }
  },
  { tableName: "PostTags", timestamps: true }
);

module.exports = { PostTags, sequelize };
