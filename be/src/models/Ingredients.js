const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Ingredients = sequelize.define(
  "Ingredients",
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
    quantity: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ingredient_Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    note: {
      type: DataTypes.STRING,
      allowNull: true //not are optional
    }
  },
  {
    tableName: "Ingredients",
    timestamps: true
  }
);

module.exports = {Ingredients , sequelize};
