const { DataTypes } = require("sequelize");

const sequelize = require("../config/db");

const Tag = sequelize.define(
  "Tag",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    tagName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    postId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Post",
        key: "id"
      }
    },
    flag: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  },
  {
    tableName: "Tag",
    timestamps: true
  }
);
module.exports = {Tag , sequelize};
