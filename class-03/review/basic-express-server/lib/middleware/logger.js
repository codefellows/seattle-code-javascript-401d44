'use strict';

// const error = require('../error-handlers/404.js');

module.exports = (req, res, next) => {
  console.log(req.method);
  next();
  // const method = req.method;
  // if (method === 'GET') {
  //   next();
  // } else {
  //   next('');
  // }
};
