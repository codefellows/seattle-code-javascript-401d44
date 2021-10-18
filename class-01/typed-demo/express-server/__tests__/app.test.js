'use strict';

// at this point app === 'undefined'
const app = require('../app.js');
const supertest = require('supertest');
const { expect, it } = require('@jest/globals');

// this object can make mocked HTTP requests to an express exported at /app.js
const request  = supertest(app);

describe('Testing my Express Server', () => {

  it('Should response with a string on POST /talk', async () => {

    let param = 'Iamsomewords';''

    // do the things
    // let response = await request.post(`/talk?words=${param}`);
    let response = await request.post('/talk').send({
      words: param,
    });

    expect(response.status).toBe(200);
    expect(typeof(response.text)).toBe('string');
    expect(response.text).toBe(param);
  });

  it('Should respond with a string on GET /repeat', async () => {

    let response = await request.get('/repeat');

    expect(response.status).toBe(200);
    expect(typeof response.text).toBe('string');
  });
});
