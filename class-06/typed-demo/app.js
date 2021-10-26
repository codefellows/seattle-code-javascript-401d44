'use strict';

const express = require('express');
const app = express();
const base64 = require('base-64');
const bcrypt = require('bcrypt');

const { Sequelize, DataTypes} = require('sequelize');
const sequelize = new Sequelize('sqlite:memory');

const User = sequelize.define('users', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// use a before Hook, runs before we create any user
User.beforeCreate(async (user) => {
  let encryptedPassword = await bcrypt.hash(user.password, 10);
  user.password = encryptedPassword;
});

app.use(express.json());


// 2 routes, POST /signup POST /signin

app.post('/signin', async  (req, res) => {
  try {

    let authString = req.headers.authorization; // 'Basic jasdhf876245987
    let encodedUserPass = authString.split(' ')[1]; // klasjdhf27q64897346q5
    let decodedUserPass = base64.decode(encodedUserPass);
    let [ user, pass ] = decodedUserPass.split(':');

    // signin needs to find a user.
    let userQuery = await User.findOne({ where: { username: user } });
    let isValidPassword = await bcrypt.compare(pass, userQuery.password);
    if (isValidPassword) {
      res.send(userQuery);
    } else {
      res.status(401).send('Unauthenticated');
    }

  } catch(e) {
    res.status(401);
    res.send('Un-authenticated request');
  }
});

app.post('/signup', async (req, res) => {
  let userData = req.body;
  console.log(userData);
  let newUser = await User.create({
    username: userData.username,
    password: userData.password
  });

  res.send(newUser);
});

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Server is up');
  });
})
