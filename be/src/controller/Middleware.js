const jwt = require("jsonwebtoken");
const MiddlewareController = {
  verifyToken: (req, res, next) => {
    const tokenBear = req.header("Authorization")?.replace("Bearer ", "");
    console.log(tokenBear);
    const token = req.headers.token;
    if (tokenBear || token) {
      const accessToken = tokenBear ? tokenBear : token.split(" ")[1];
      jwt.verify(accessToken, process.env.accessTokenKey, (err, user) => {
        if (err) {
          return res.status(403).json("Token is invalid .Please login ");
        } else {
          req.user = user;
          next();
        }
      });
    } else {
      res.status(401).json({ message: `You're not authentication` });
    }
  }
};

module.exports = MiddlewareController;
