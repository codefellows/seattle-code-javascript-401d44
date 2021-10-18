'use strict';

const sum = require('./sum.js');

// this is only valid in a test file.
describe('Testing my sum function', () => {
  it('should add 1 and 2 to equal 3', () => {

    let result = sum(1,2);
    expect(result).toBe(3);
  });
});
