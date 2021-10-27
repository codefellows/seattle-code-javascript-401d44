'use strict';

const { Sequelize, DataTypes} = require('sequelize');
const users = require('./users.js');

const sequelize = new Sequelize('sqlite:memory');

module.exports = {
  db: sequelize,
  Users: users(sequelize, DataTypes),
};
