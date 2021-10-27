'use strict';

const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET || 'secretstring';
const bcrypt = require('bcrypt');

const Users = (sequelize, DataTypes) => {
  const usersTable = sequelize.define('Users', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM('user', 'admin', 'editor'),
      defaultValue: 'user',
      allowNull: false,  
    },
    token: {
      type: DataTypes.VIRTUAL,
      get() {
        return jwt.sign({username: this.username}, SECRET);
      }
    },
    capabilities: {
      type: DataTypes.VIRTUAL,
      get() {
        const acl = {
          user: ['read'],
          admin: ['read', 'create', 'update', 'delete'],
          editor: ['read', 'update']
        }
        return acl[this.role];
      }
    }
  });

  usersTable.beforeCreate(async (user) => {
    let encryptPass = await bcrypt.hash(user.password, 10);
    user.password = encryptPass;
  });

  usersTable.authBasic = async function(username, password) {
    // find a user by username
    let user = await this.findOne({ where: { username }});
    // validate the password
    let isValidPassword = await bcrypt.compare(password, user.password);
    if(isValidPassword) return user;
    throw new Error('Invalid username and password');
  }

  usersTable.authBearer = async function(token) {
    // validate the token?
    let parsedToken = jwt.verify(token, SECRET);
    let user = await this.findOne({ where: { username: parsedToken.username }});
    if (user) return user;
    throw new Error('Invalid token');
  }

  return usersTable;
} 

module.exports = Users;

