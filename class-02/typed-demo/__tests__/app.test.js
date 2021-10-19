'use strict';

const app = require('../app.js');
const supertest = require('supertest');

const request = supertest(app.app);

describe('Testing our Talk Server', () => {
  it('Should reponse with a new Phrase on POST to /talk', async () => {

    const response = await request.post('/talk').send({
      words: 'I am some test words',
    });
    expect(response.status).toBe(200);
    expect(response.text).toBe('I am some test words');
  });

  it('Should respond with the last phrase on GET to /repeat', async () => {

    const response = await request.get('/repeat');

    expect(response.status).toBe(200);
    expect(response.text).toBe('I am some test words');
  });

  it ('should reject PUT requests', async () => {
    const response = await request.put('/');

    expect(response.status).toBe(405);
  });
    it ('should reject PATCH requests', async () => {
    const response = await request.patch('/');

    expect(response.status).toBe(405);
  });
    it ('should reject DELETE requests', async () => {
    const response = await request.delete('/');

    expect(response.status).toBe(405);
  });
});
