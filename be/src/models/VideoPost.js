const { DataTypes } = require("sequelize");

const sequelize = require("../config/db");

const VideoPost = sequelize.define(
  "VideoPost",
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
    video: {
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
    tableName: "VideoPost",
    timestamps: true
  }
);

module.exports = { VideoPost, sequelize };
