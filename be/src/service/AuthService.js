const AuthRepository = require("../repositories/AuthRepository");

const AuthService = {
  // checkEmailExist
  checkEmailExist: async (email) => {
    return await AuthRepository.checkEmailExist(email);
  },

  // createUser

  createUser: async (username, email, hashPassword, profilePicture) => {
    return await AuthRepository.createUser(
      username,
      email,
      hashPassword,
      profilePicture
    );
  },

  // addUserRole

  addUserRole: async (createUser, defaultRoleName) => {
    return await AuthRepository.addUserRole(createUser, defaultRoleName);
  },

  // getRoleId

  getRoleId: async (defaultRoleName) => {
    return await AuthRepository.getRoleId(defaultRoleName);
  },

  // getUserIdByEmail

  getUserIdByEmail: async (email) => {
    return await AuthRepository.getUserIdByEmail(email);
  },

  // get passwordHash
  passwordHash: async (userId) => {
    return await AuthRepository.passwordHash(userId);
  },

  // getRoleUser
  getRoleUser: async (userId) => {
    return await AuthRepository.getRoleUser(userId);
  },

  // saveRefreshToken
  saveRefreshToken: async (userId, refreshToken) => {
    return await AuthRepository.saveRefreshToken(userId, refreshToken);
  },

  // checkRefreshTokenExist

  checkRefreshTokenExist: async (refreshToken) => {
    return await AuthRepository.checkRefreshTokenExist(refreshToken);
  },

  //   removeRefreshToken
  removeRefreshToken: async (refreshToken) => {
    return await AuthRepository.removeRefreshToken(refreshToken);
  },

  //   saveNewRefreshToken

  saveNewRefreshToken : async (newRefreshToken , userId) => {
    return await AuthRepository.saveNewRefreshToken(newRefreshToken , userId)
  }
};
module.exports = AuthService;
