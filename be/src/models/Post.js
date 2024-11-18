const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Post = sequelize.define(
  "Post",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    thumbnail: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: "User",
        key: "id"
      }
    },
    flag: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    prepTime: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    cookTime: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    serving: {
      type: DataTypes.STRING,
      allowNull: false
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false
    },
    likeCount: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    dislikeCount: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    commentCount: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    viewCount: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
  },
  {
    tableName: "Post",
    timestamps: true
  }
);

module.exports = { Post, sequelize };
