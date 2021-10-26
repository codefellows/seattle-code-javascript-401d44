'use strict';

const base64 = require('base-64');
const bcrypt = require('bcrypt');
const { users } = require('../model');

// what does Express middleware need?
async function basicAuth(request, response, next) {

  // decode auth header {authorization: Basic ABX787=a}
  if (!request.headers.authorization) {
    response.status(403);
    response.send('No Auth Headers');
  }

  let encodedUserPass = request.headers.authorization.split(' ')[1]; // ABX787=a
  let decodedUserPass = base64.decode(encodedUserPass); // jacob:password
  let [username, password] = decodedUserPass.split(':');

  // find user by username
  let userQuery = await users.findOne({ where: { username }});
  // validate password
  let validPass = await bcrypt.compare(password, userQuery.password);
  if (validPass) {
    request.user = userQuery;
    // when do we need to call next??
    next();
  } else {
    response.status(403);
    response.send('Authentication Error');
  }
}

module.exports = basicAuth;
