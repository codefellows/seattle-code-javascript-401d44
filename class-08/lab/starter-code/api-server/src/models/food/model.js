'use strict';

const foodModel = (sequelize, DataTypes) => sequelize.define('Food', {
  name: { type: DataTypes.STRING, required: true },
  calories: { type: DataTypes.NUMBER, required: true },
  type: { type: DataTypes.ENUM('fruit', 'vegetable', 'protein'), required: true }
});

module.exports = foodModel;
