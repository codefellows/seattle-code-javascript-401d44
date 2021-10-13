'use strict';

const {server} = require('../src/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('web server', () => {

  it('should respond with a 500 on a route that throws an error', () => {

    return mockRequest
      .get('/err')
      .then(results => {
        expect(results.status).toBe(500);
      })
      .catch(err => {
        expect(err).not.toBeDefined();
      });

  });

  it('should respond with a 404 on an invalid route', () => {

    return mockRequest
      .get('/foobar')
      .then(results => {
        expect(results.status).toBe(404);
      })
      .catch(err => {
        expect(err).not.toBeDefined();
      });

  });

  it('should respond properly on a get request to a valid static page', () => {

    return mockRequest
      .get('/testing.html')
      .then(results => {
        expect(results.status).toBe(200);
      })
      .catch(err => {
        expect(err).not.toBeDefined();
      });

  });

  it('should respond properly on a get request to a valid express route', () => {

    return mockRequest
      .get('/')
      .then(results => {
        expect(results.status).toBe(200);
      })
      .catch(err => {
        expect(err).not.toBeDefined();
      });

  });

  it('should be able to post to /save', ()  => {

    let obj = {title:'foo', article:'some text', author:'person'};

    return mockRequest
      .post('/save')
      .send(obj)
      .then(results => {
        expect(results.status).toBe(200);
        expect(results.body).toEqual(obj);
      })
      .catch( err => console.error('err', err) );

  });

});


