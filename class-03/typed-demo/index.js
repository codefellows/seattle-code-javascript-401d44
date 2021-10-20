'use strict';

// this is where our data module meets our server module.
const { db } = require('./model');
const { start } = require('./app');
const PORT = process.env.PORT || 3000;

db.sync().then(() =>{
  start(PORT);
});
