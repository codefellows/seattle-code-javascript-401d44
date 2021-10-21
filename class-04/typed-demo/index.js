'use strict';

require('dotenv').config();
// use express but not in index??
const {start} = require('./server/server.js');
const { db } = require('./models');

const PORT = process.env.PORT || 3000;

db.sync().then(() => {
  start(PORT);
});
