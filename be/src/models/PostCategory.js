const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const PostCategory = sequelize.define(
  "PostCategory",
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
      },
      allowNull: false
    },
    categoryId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Category",
        key: "id"
      },
      allowNull: false
    }
  },
  {
    tableName: "PostCategory",
    timestamps: true
  }
);

module.exports = { PostCategory, sequelize };
