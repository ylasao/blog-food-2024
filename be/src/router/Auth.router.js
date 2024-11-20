const express = require("express");
const AuthController = require("../controller/Auth");
const MiddlewareController = require("../controller/Middleware");
const Auth = express.Router();
 
Auth.post("/signIn", AuthController.signIn);
Auth.post("/signUp", AuthController.signUp);
Auth.post("/refreshToken", AuthController.refreshToken);
Auth.post("/logout", AuthController.logout);

module.exports = Auth;
