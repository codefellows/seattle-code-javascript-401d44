'use strict';

//  used for middleware
// everytime any route is hit, run the specified function
module.exports = function(req, res, next) {
  console.log(req.method);
  // middleware needs next to be called.
  next();
};
