'use strict';

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SECRET = process.env.SECRET || 'secretstringfortesting';

const User = (sequelize, DataTypes) => {

  const userTable = sequelize.define('users', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    token: {
      type: DataTypes.VIRTUAL,
      get() {
        let payload = {
          username: this.username,
        }
        return jwt.sign(payload, SECRET);
      }, 
      // set(options) {} this runs whenever we call user.token = 'some value to pass to setter'
    }
  });

  userTable.beforeCreate(async (user) => {
    let encryptedPass = await bcrypt.hash(user.password, 10);
    user.password = encryptedPass;
  });

  return userTable;
}


module.exports = User;
