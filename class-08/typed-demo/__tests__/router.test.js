'use strict';

const app = require('../server/app.js');
const { db } = require('../model');
const supertest = require('supertest');
const request = supertest(app);
const base64 = require('base-64');

beforeAll(async () => {
  await db.sync();
});
afterAll(async () => {
  await db.drop();
});

describe('Testing server router', () => {

  it('should create a user', async () => {
    let response = await request.post('/signup').send({
      username: 'Jacob',
      password: 'test',
    });

    expect(response.status).toBe(200);
  });

  it('should authorize a request on POST /signin', async () => {
    let encodedString = base64.encode('Jacob:test');

    let response = await request.post('/signin').set({
      Authorization: `Basic ${encodedString}`
    });
    expect(response.status).toBe(200);
  });
});
