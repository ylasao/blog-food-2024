const { DataTypes } = require("sequelize");

const sequelize = require("../config/db");

const PostView = sequelize.define(
  "PostView",
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
      onDelete: "CASCADE"
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: "User",
        key: "id"
      },
      onDelete: "CASCADE"
    },
    viewedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  },
  {
    tableName: "PostView",
    timestamps: true
  }
);

module.exports = {PostView , sequelize};
