'use strict';

const channel = (sequelize, DataTypes) => sequelize.define('channel', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  topic: {
    type: DataTypes.STRING,
    allowNull: true,
  }
});

module.exports = channel;
