const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Comment = sequelize.define(
  "Comment",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    flag: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: "User",
        key: "id"
      },
      onDelete: "CASCADE"
    },
    postId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Post",
        key: "id"
      },
      onDelete: "CASCADE"
    }
  },
  {
    tableName: "Comment",
    timestamps: true
  }
);

module.exports = {Comment , sequelize};
