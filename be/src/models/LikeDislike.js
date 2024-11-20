const { DataTypes } = require("sequelize");

const sequelize = require("../config/db");

const LikeDislike = sequelize.define(
  "LikeDislike",
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
      }
      // auto delete  when the user is deleted
    },
    postId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Post",
        key: "id"
      }
      // auto delete  when the post  is deleted
    },
    isLiked: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  },
  {
    tableName: "LikeDislike",
    timestamps: true
  }
);

module.exports = { LikeDislike, sequelize };
