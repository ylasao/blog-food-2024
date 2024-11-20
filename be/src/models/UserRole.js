const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const UserRole = sequelize.define(
  "UserRole",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: "User",
        key: "id"
      },
      
    },
    roleId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Role",
        key: "id"
      }
    }
  },
  {
    tableName: "UserRole",
    timestamps: false
  }
);
module.exports = { UserRole, sequelize };
