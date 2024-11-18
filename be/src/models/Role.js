const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Role = sequelize.define(
  "Role",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name_role: {
      type: DataTypes.STRING,
      allowNull: false
    },
    flag: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  },
  {
    tableName: "Role",
    timestamps: true
  }
);

module.exports = {Role , sequelize}