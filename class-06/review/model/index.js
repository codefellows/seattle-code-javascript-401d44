'use strict';

// is there a DB to connect to?
const DATABASE_URL='sqlite:memory';

// define my model 
const jokesModel = (sequelize, DataTypes) => sequelize.define('Jokes', {
  isFunny: {
    type: DataTypes.BOOLEAN,
  },
  punchline: {
    type: DataTypes.STRING,
  },
  setup: {
    type: DataTypes.STRING,
  },
});

// Connect to DB
// create a seqeuelize instance
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(DATABASE_URL);

const JokesTable = jokesModel(sequelize, DataTypes);

module.exports = {
  jokes: JokesTable,
  db: sequelize,
};
