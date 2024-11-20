const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Author = sequelize.define(
  "Author",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    }, 
    flag: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    profileLink: {
      type: DataTypes.STRING,
      allowNull: true
    },
    bio: {
      type: DataTypes.STRING,
      allowNull: true
    }
  },
  {
    tableName: "Author",
    timestamps: true
  }
);
module.exports = { Author, sequelize };
