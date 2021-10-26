'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const DATABASE_URL = 'sqlite:memory'|| process.env.DATABASE_URL;
const sequelize = new Sequelize(DATABASE_URL);

const Users = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});


const UsersTable = new Users(sequelize, DataTypes);

module.exports = {
  db: sequelize,
  users: UsersTable,
}