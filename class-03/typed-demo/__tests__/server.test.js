'use strict';

const { db } = require('../model');
const supertest = require('supertest');
const app = require('../app');
const request = supertest(app.server);

// Initialize any things that our tests need
beforeAll(async () => {
 // make sure that my tables exist.
 await db.sync(); // creates our tables if they do not exist
});


// remove any side effects from our test
afterAll(async () => {
  // drops all table rows within our database instance.  After all tests 
  await db.drop();
});

describe('Testing our express server', () => {
  it('shuold fetch all phrases on GET /Phrase', async () => {
    const response = await request.get('/phrase');

    expect(response.status).toBe(200);
    expect(response.body.length).toBe(0);
  });
});
