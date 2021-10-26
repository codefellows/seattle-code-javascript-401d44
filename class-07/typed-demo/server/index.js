'use strict';

const express = require('express');
const app = express();

const basicAuth = require('./basicAuth.js');
const bearerAuth = require('./bearerAuth.js');
const { users } = require('../model');

app.use(express.json());
app.use(express.urlencoded( {extended: true} ));

app.post('/signup',async (req, res) => {
  const newUser = await users.create(req.body);
  console.log(newUser.token);
  res.status(201);
  res.send(newUser);
});

app.post('/signin', basicAuth, (req, res) => {
  console.log('youve hit the signin route!!');
  res.send('OK');
});

app.get('/jokes', bearerAuth, (req, res) => {
  console.log('token valid!!');
  res.send('ok');
});

module.exports = app;
