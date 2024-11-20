const sequelize = require("../config/db");
const { refreshToken } = require("../controller/Auth");
const AuthRepository = {
  // checkEmailExist

  checkEmailExist: async (email) => {
    const query = `SELECT * FROM user WHERE email =:email`;
    const [result] = await sequelize.query(query, {
      replacements: { email: email }
    });
    return result[0];
  },

  // createUser

  createUser: async (username, email, hashPassword, profilePicture) => {
    const data = {
      username: username,
      email: email,
      password: hashPassword,
      profilePicture: profilePicture
    };
    const query = `INSERT INTO user (username, email , password , profilePicture ) VALUES (:username , :email , :password , :profilePicture)`;
    const [result] = await sequelize.query(query, {
      replacements: { ...data }
    });
    return result;
  },

  //addUserRole

  addUserRole: async (createUser, defaultRoleName) => {
    const query = `INSERT INTO userrole (userId , roleId) VALUES (:userId , :roleId)`;
    const [result] = await sequelize.query(query, {
      replacements: { userId: createUser, roleId: defaultRoleName }
    });
    return result;
  },

  // getRoleId

  getRoleId: async (defaultRoleName) => {
    const query = `SELECT * FROM role WHERE name_role = :name_role`;
    const [result] = await sequelize.query(query, {
      replacements: { name_role: defaultRoleName }
    });
    return result[0].id;
  },

  // getUserIdByEmail
  getUserIdByEmail: async (email) => {
    const query = `SELECT * FROM user WHERE email=:email`;
    const [result] = await sequelize.query(query, {
      replacements: { email: email }
    });
    return result[0].id;
  },

  // passwordHash

  passwordHash: async (userId) => {
    const query = `SELECT password FROM user WHERE id=:id`;
    const [result] = await sequelize.query(query, {
      replacements: { id: userId }
    });
    return result[0].password;
  },

  // getRoleUser
  getRoleUser: async (userId) => {
    const query = `SELECT roleId FROM userrole WHERE userId = :userId`;
    const [result] = await sequelize.query(query, {
      replacements: { userId: userId }
    });
    const roleId = result[0].roleId;
    console.log(roleId);
    const query2 = `SELECT name_role FROM role WHERE id = :id`;
    const [result2] = await sequelize.query(query2, {
      replacements: { id: roleId }
    });

    return result2[0].name_role;
  },

  // saveRefreshToken
  saveRefreshToken: async (userId, refreshToken) => {
    console.log(userId, refreshToken);
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
    const query = `INSERT INTO refreshtoken (refreshToken , userId , expires_at) VALUES (:refreshToken , :userId , :expires_at)`;
    const [result] = await sequelize.query(query, {
      replacements: {
        refreshToken: refreshToken,
        userId: userId,
        expires_at: expiresAt
      }
    });
    return result;
  },

  checkRefreshTokenExist: async (refreshToken) => {
    const query = `SELECT * FROM refreshtoken WHERE refreshToken = :refreshToken `;
    const [result] = await sequelize.query(query, {
      replacements: { refreshToken }
    });
    return result[0];
  },

  removeRefreshToken: async (refreshToken) => {
    const query = `DELETE FROM refreshtoken WHERE refreshToken = :refreshToken`;
    const [result] = await sequelize.query(query, {
      replacements: { refreshToken }
    });
    return result;
  },
  //   saveNewRefreshToken

  saveNewRefreshToken: async (newRefreshToken, userId) => {
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
    const query = `INSERT INTO refreshtoken (refreshToken , expires_at , userId) VALUES (:refreshToken , :expires_at , :userId)`;
    const [result] = await sequelize.query(query, {
      replacements: {
        refreshToken: newRefreshToken,
        expires_at: expiresAt,
        userId: userId
      }
    });
    return result;
  }
};

module.exports = AuthRepository;
