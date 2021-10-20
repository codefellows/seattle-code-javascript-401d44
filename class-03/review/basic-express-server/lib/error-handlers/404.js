'use strict';

module.exports = (req, res) => {
  console.log('OUR 404 error handler');
  res.status(404);
  res.end();
};
