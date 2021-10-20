'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const PhraseModel = require('./phrase.js');

console.log(process.env.NODE_ENV);

let DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory';
// sqliteDatbase = sqlite:memory
// postgresDatabase = 'postgresql://localhost:5432/talk';
// for folks the need permissions: `postgresql://username:pass@localhost:5432/db-name


//  HEADS UP:  our production database requires some extra config
const options = process.env.NODE_ENV === 'production'
  ? {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      }
    }
  }
  : {};

// actually connecting to a running database / or just use sqlite
const sequelizeInstance = new Sequelize(DATABASE_URL, options);
// is ready to consume models so that it can either validate that tables exist, or create those tables.

const phraseTable = PhraseModel(sequelizeInstance, DataTypes);

module.exports = {
  db: sequelizeInstance,
  phrases: phraseTable,
};
