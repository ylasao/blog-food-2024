const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const { refreshToken } = require("../controller/Auth");

const RefreshToken = sequelize.define(
  "RefreshToken",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    refreshToken: {
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
    expires_at: {
      type: DataTypes.DATE,
      allowNull: false
    }
  },
  { tableName: "RefreshToken", timestamps: false }
);

module.exports = { RefreshToken, sequelize };
