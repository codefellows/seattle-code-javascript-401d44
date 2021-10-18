'use strict'; // Why???  keeps us sane, force is to use approriate and apprriate declaration of variables.  Throws errors when strict behavior is not followed;

// Node / runtimes like node, utilize this syntax to "import" other programs
// takes a relative path to some other program files.
const sum = require('./sum.js'); // require function: 2 things
// 1) executes all the code in that file.
// this includes mutations!
// 2) provides a single value equal to module.exports.

console.log(sum(1, 2));
