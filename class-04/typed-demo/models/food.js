'use strict';

// what belongs on food data
const food = (sequelize, DataTypes) => sequelize.define('food',{
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  calories: {
    type: DataTypes.INTEGER,
    allowNull: true,
  }
}); // name our table 'food'

module.exports = food;
