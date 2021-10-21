'use strict';

// What type of data are we making??
//  we are making sequelize models
//  do we want to make these there own files?
//     clothes and food

// set up our sequelize "module"

const foodModel = require('./food.js');
const clothesModel = require('./clothes.js');
const channelModel = require('./channel.js');
const messageModel = require('./message.js');

const { Sequelize, DataTypes } = require('sequelize');

// instiate our instance on sequelize; 
// pass ing databasew ULR
const sequelize = new Sequelize('sqlite:memory');

// instatiate our DB with our models
const food = foodModel(sequelize, DataTypes);
const clothes = clothesModel(sequelize, DataTypes);
const messages = messageModel(sequelize, DataTypes);
const channels = channelModel(sequelize, DataTypes);

// These models will not work with another database technologuy.
channels.hasMany(messages, { foreignKey: 'channelId', sourceKey: 'id'});
messages.belongsTo(channels, { foreignKey: 'channelId', targetKey: 'id'});

module.exports = {
  db: sequelize,
  food,
  clothes,
  channels,
  messages,
};
