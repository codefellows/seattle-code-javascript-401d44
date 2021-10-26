'use strict';

const base64 = require('base-64');
const { user } = require('../models/index.js')

module.exports = async (req, res, next) => {

  if (!req.headers.authorization) { return _authError(); }

  let basic = req.headers.authorization;
  let [username, pass] = base64.decode(basic).split(':');

  try {
    req.user = await user.authenticateBasic(username, pass)
    next();
  } catch (e) {
    res.status(403).send('Invalid Login');
  }

}

