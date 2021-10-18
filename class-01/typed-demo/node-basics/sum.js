'use strict';

// a file that creates a module.

function sum(a, b) {
  return a + b;
}

// make this available to other programs / files.
module.exports = sum;
