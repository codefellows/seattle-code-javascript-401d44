'use strict';

const jwt = require('jsonwebtoken');
const { users } = require('../model');

const SECRET = process.env.SECRET || 'secretstringfortesting';

// what does Express middleware need?
async function basicAuth(request, response, next) {

  // decode auth header {authorization: Basic ABX787=a}
  if (!request.headers.authorization) {
    response.status(403);
    response.send('No Auth Headers');
  }

  let encodedToken = request.headers.authorization.split(' ')[1]; // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
  let validUser = jwt.verify(encodedToken, SECRET);

  // find user by username
  let userQuery = await users.findOne({ where: { username: validUser.username }});
  // validate password
  if (userQuery) {
    request.user = userQuery;
    // when do we need to call next??
    next();
  } else {
    response.status(403);
    response.send('Authentication Error');
  }
}

module.exports = basicAuth;
