'use strict';

const validator = require('../lib/middleware/validator.js');
// const error = require('../lib/error-handlers/500.js');

describe('Testing the validator middleware', () => {
  let req = {method: 'GET', query: {}};
  let res = {status: jest.fn()};
  let next = jest.fn(); // a jest "spy"
  it('Should throw an error if there is no name property', () => {
    req.query.name = undefined;
    validator(req, res, next); // we are passing values into the logger funcion.

    expect(next).toHaveBeenCalledWith('Invalid Request');
    // expect(res.status).toHaveBeenCalledWith(500);
  });
});
