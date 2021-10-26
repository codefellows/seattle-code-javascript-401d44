'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const usersModel = require('./users.js');

const sequelize = new Sequelize('sqlite:memory');

module.exports ={ 
  db: sequelize,
  users: usersModel(sequelize, DataTypes),
};
