'use strict';

const server = require('../lib/server.js');
const supertest = require('supertest');

const req = supertest(server.server);

describe('Testing routes', () => {
  it('Should throw an error when using a bad route', async () => {
    const res = await req.get('/badroute');
    expect(res.status).toBe(404);
  });
  it('Should pass with code 200 when query includes name', async () => {
    const res = await req.get('/person?name=fred');

    expect(res.status).toBe(200);
    // expect(res.).toBe();
  });
});
