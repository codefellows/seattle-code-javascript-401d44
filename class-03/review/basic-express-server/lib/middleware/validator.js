'use strict';

// const error = require('../error-handlers/500.js');

module.exports = (req, res, next) => {
  const query = req.query.name;
  if (query) {
    next();
  } else {
    // res.status(500);
    // you cannot tell express what error handler to use like this:
    // next(error);
    // this does not "force" a 500, but it calls next with a parameter which triggers an error handler.
    next('Invalid Request');
  }
};
