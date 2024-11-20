const { DataTypes } = require("sequelize");

const sequelize = require("../config/db");

const MediaGallery = sequelize.define(
  "MediaGallery",
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
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    postId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Post",
        key: "id"
      } 
    }
  },
  {
    tableName: "MediaGallery",
    timestamps: true
  }
);

module.exports = {MediaGallery , sequelize};
