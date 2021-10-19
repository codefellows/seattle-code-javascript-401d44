'use strict';

// parameters for error handlers??
module.exports = function(error, request, response, next) {

  console.log(error);
  response.status(405);
  response.end();
};
