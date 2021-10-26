'use strict';

require ('dotenv').config();

const express = require('express');
const app = express();
const { db } = require('./auth/models/users-model.js');
const { start } = require('../index.js')

app.use(express.json);

//add routes here

db.sync()
  .then(() => {
    start(console.log('Server UP'));
  }).catch(e => {
    console.error('Could not start server', e.message);
  });
