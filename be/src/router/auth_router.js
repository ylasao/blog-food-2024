const express = require("express");

const auth_router = express.Router();

auth_router.post("/sign-in", (req, res) => {
  const { userName, email, password } = req.body;
  return res.status(200).json({ message: userName, email, password });
});

module.exports = auth_router;
