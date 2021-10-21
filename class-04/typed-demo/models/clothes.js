'use strict';


// what belongs on clothing data
// define the clothing 'table' and 2 'columns.
const clothes = (sequelize, DataTypes) => sequelize.define('clothes', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  size: {
    type: DataTypes.ENUM('s', 'm', 'l', 'xl'),
    allowNull: true,
  }
});

module.exports = clothes;
