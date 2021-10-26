'use strict';

const app = require('./server');
const { db } = require('./model');

db.sync().then(() => {
  app.listen(3000);
});
