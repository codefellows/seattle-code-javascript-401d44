'use strict';

const logger = require('../lib/middleware/logger.js');
const error = require('../lib/error-handlers/404.js');

describe('Testing the logging middleware', () => {
  it('Should be able to log a GET method', () => {
    logger(req, res, next);

    expect(console.log).toHaveBeenCalledWith('GET');
    expect(next).toHaveBeenCalled();
  });

  it('Should throw an error when a different method is called', () => {
    req.method = 'PUT';
    logger(req, res, next);

    expect(next).toHaveBeenCalledWith(error);
    expect(res.status).toBe(404);
  });
});
