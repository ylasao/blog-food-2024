const express = require("express");

const router = express.Router();
const AuthRouter = require("./Auth.router");
const PostRouter = require("./Post.router");

router.use("/auth", AuthRouter);
router.use("/post", PostRouter);
module.exports = router;
