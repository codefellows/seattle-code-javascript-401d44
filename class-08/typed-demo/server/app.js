'use strict';

// curried functions!!
const express = require('express');
const base64 = require('base-64');
const { Users } = require('../model');
const acl = require('./middleware/acl.js');

const app = express();

async function basicAuth(req, res, next) {
  let encodedUserPass = req.headers.authorization.split(' ')[1];
  let [username, pass] = base64.decode(encodedUserPass).split(':');

  try {
    let user = await Users.authBasic(username, pass);
    req.user = user;
    next();
  } catch(e) {
    next(e);
  }
}

app.use(express.json());

app.post('/signup', async (req, res) => {
  let newUser = await Users.create(req.body);
  res.send(newUser);
});

app.post('/signin', basicAuth, acl('read'), (req, res) => {
  res.send('You have access');
});

module.exports = app;
