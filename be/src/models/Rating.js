const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const User = require("./User");

const Rating = sequelize.define(
  "Rating",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 5
      }
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
    },
    flag: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  },
  {
    tableName: "Rating",
    timestamps: true
  }
);

module.exports = {Rating , sequelize};
