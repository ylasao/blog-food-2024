const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Direction = sequelize.define(
  "Direction",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    flag: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    step: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    instruction: {
      type: DataTypes.TEXT,
      allowNull: false
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
  { tableName: "Direction", timestamps: true }
);

module.exports = { Direction, sequelize };
