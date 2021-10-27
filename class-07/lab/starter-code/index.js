'use strict';

// Start up DB Server
const server = require('./src/server.js')
const { db } = require('./src/auth/models/index.js');
const PORT = process.env.PORT;

db.sync()
  .then(() => {
    // Start the web server
    server.start(PORT);
  });

