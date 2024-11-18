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
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "User",
        key: "id"
      },
      onDelete: "CASCADE"
    },
    role_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Role",
        key: "id"
      }
    }
  },
  {
    tableName: "UserRole",
    timestamps: true
  }
);
module.exports = {UserRole , sequelize};
