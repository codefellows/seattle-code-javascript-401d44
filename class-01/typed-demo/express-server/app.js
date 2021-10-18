'use strict';

const express = require('express');
const app = express();

const repeat = require('./routes/repeat.js');
const talk = require('./routes/talk.js');
const log = require('./middleware/log.js');

// allows JSON objects to be attached to the request;
app.use(express.json());
app.use(log);

//  Creating something new?
//  configuring our server with a function to repond to a request
app.post('/talk', talk);
app.get('/repeat', repeat);

module.exports = app;
