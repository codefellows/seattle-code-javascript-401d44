'use strict';

module.exports = function (req, res) {

  // how do we get those params
  let words = req.body.words || req.query.words;

  res.send(words);
}; 
