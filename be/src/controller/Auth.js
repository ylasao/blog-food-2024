const AuthService = require("../service/AuthService");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Auth = {
  signIn: async (req, res) => {
    try {
      const data = req.body;
      const email = data.email;
      const password = data.password;
      const username = data.username;
      const profilePicture = data.profilePicture;

      // email exist in database ?
      const checkEmailExist = await AuthService.checkEmailExist(data.email);
      if (checkEmailExist) {
        return res
          .status(403)
          .json({ message: "Email already exist ! Please check again ." });
      }
      // if email not email ..check email Validation
      const checkEmailValidation = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      };

      if (!checkEmailValidation(email)) {
        return res.status(403).json({ message: "Invalid email format" });
      }

      // hash password
      const hashPassword = await bcrypt.hash(password, 10);
      console.log(hashPassword);

      // save all into database
      const createUser = await AuthService.createUser(
        username,
        email,
        hashPassword,
        profilePicture
      );
      console.log(createUser);
      if (!createUser) {
        return res
          .status(403)
          .json({ message: "Can not create user ! Check again ." });
      }
      // get user ID by email
      const getUserIdByEmail = await AuthService.getUserIdByEmail(email);

      // add userId vs roleId
      const defaultRoleName = "user";

      const roleId = await AuthService.getRoleId(defaultRoleName);
      console.log(roleId);

      const addUserRole = await AuthService.addUserRole(
        getUserIdByEmail,
        roleId
      );

      if (!addUserRole) {
        return res
          .status(403)
          .json({ message: "Can not role user ! Check again ." });
      }

      return res.status(201).json({ message: "Sign in Success ." });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  },

  generateAccessToken: (user, roleUser) => {
    return jwt.sign(
      // payload
      { id: user.id, email: user.email, role: roleUser },
      process.env.accessTokenKey,
      { expiresIn: "30s" }
    );
  },

  generateRefreshToken: (user, roleUser) => {
    return jwt.sign(
      // payload
      { id: user.id, email: user.email, role: roleUser },
      process.env.refreshToken,
      { expiresIn: "12m" }
    );
  },
  signUp: async (req, res) => {
    try {
      const { email, password } = req.body;

      if (email == undefined || password == undefined) {
        return res
          .status(403)
          .json({ message: "Please entering email and password ." });
      }

      // check email exist
      const checkEmailExist = await AuthService.checkEmailExist(email);
      if (!checkEmailExist) {
        return res
          .status(404)
          .json({ message: "Email not exist . Please Sign in !" });
      }

      // get password hash
      const passwordHash = await AuthService.passwordHash(checkEmailExist.id);
      console.log(passwordHash);

      // compare password
      const comparePassword = await bcrypt.compare(password, passwordHash);
      if (!comparePassword) {
        return res
          .status(403)
          .json({ message: "Password wrong ! Please try again ." });
      }
      const user = checkEmailExist;
      //
      //    get roleUser by userId
      const roleUser = await AuthService.getRoleUser(checkEmailExist.id);
      console.log(`roleUser ${roleUser}`);
      if (!roleUser) {
        return res
          .status(403)
          .json({ message: "can not get role user ! Check gain" });
      }

      //create access token  and refresh token
      const accessToken = Auth.generateAccessToken(user, roleUser);
      const refreshToken = Auth.generateRefreshToken(user, roleUser);
      console.log(`accessToken ${accessToken}`);
      //   save refresh token to database
      const saveRefreshToken = await AuthService.saveRefreshToken(
        user.id,
        refreshToken
      );
      console.log(saveRefreshToken);
      if (!saveRefreshToken) {
        return res.status(403).json({ message: "fail" });
      }

      res.status(200).json({ accessToken, refreshToken });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  },
  refreshToken: async (req, res) => {
    try {
      // check refresh token true format
      const refreshToken = req.body.refreshToken;

      if (!refreshToken) {
        return res.status(403).json({ message: "You are not authorized " });
      }

      const checkRefreshTokenExist = await AuthService.checkRefreshTokenExist(
        refreshToken
      );

      if (!checkRefreshTokenExist) {
        return res
          .status(403)
          .json({ message: "Refresh token is not Exist !" });
      }
      // check refresh expires
      if (new Date() > new Date(checkRefreshTokenExist.expires_at)) {
        return res.status(403).json({
          message: "Refresh token is expires ! Please login again . Thank u"
        });
      }

      // verify refresh token
      jwt.verify(refreshToken, process.env.refreshToken, async (err, user) => {
        if (err) {
          return res
            .status(403)
            .json({ message: "refresh token expires . Please login" });
        }
        // generate new access token and new refresh token

        const newAccessToken = Auth.generateAccessToken(user);
        const newRefreshToken = Auth.generateRefreshToken(user);

        try {
          // First  : remove  old refresh token from database
          await AuthService.removeRefreshToken(refreshToken);

          // Second : save new refresh token to database
          await AuthService.saveNewRefreshToken(newRefreshToken, user.id);

          return res.status(201).json({
            accessToken: newAccessToken,
            refreshToken: newRefreshToken
          });
        } catch (err) {
          return res.status(500).json({ message: err });
        }
      });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  },
  logout: async (req, res) => {
    console.log("logout");
    try {
      // check refresh token exist
      const refreshToken = req.body.refreshToken;
      console.log(`Refresh token ${refreshToken}`);
      if (!refreshToken) {
        return res
          .status(403)
          .json({ message: "Refresh token not not found !" });
      }

      const checkRefreshTokenExist = await AuthService.checkRefreshTokenExist(
        refreshToken
      );
      if (!checkRefreshTokenExist) {
        return res
          .status(403)
          .json({ message: "Refresh token not exist ! Please login" });
      }

      const removeRefreshToken = AuthService.removeRefreshToken(refreshToken);
      if (!removeRefreshToken) {
        return res
          .status(403)
          .json({ message: "Cant not remove refresh token !" });
      }

      return res.status(200).json("Logout success .");
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }
};
module.exports = Auth;
