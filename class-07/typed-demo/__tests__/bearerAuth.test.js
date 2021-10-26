'use strict';

const supertest = require('supertest');
const app = require('../server');
const { db } = require('../model');

const request = supertest(app);

// beforeAll(async () => {
//   await db.sync();
// });
// afterAll(async () => {
//   await db.drop();
// });

describe('Testing authentication routes', () => {
  let token = null;
  it('should be able to create a new User', async () => {
    const response = await request.post('/signup').send({
      username: 'Jacob',
      password: 'test',
    });

    expect(response.status).toBe(201);
    expect(response.body.token).toBeTruthy();
    token = response.body.token;
    expect(response.body.username).toBe('Jacob');
  });

  it('Should be able to hit jokes with our token', async () => {
    let response = await request.get('/jokes').set({
      Authorization: `Bearer ${token}`,
    });

    expect(response.status).toBe(200);
  });
});
