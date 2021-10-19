'use strict';

const express = require('express');
const app = express(); // Why is this line so important?
// this creates an object, that is fully capable of handling Web Requests.

app.get('/', function(request, response) {
  // send a response?
  console.log('GET BEING HIT');
  response.send('Some text');
});
// agnostic of HTTP Method
app.use(logger);
app.get('/log',  function(request, response) {
  // send a response?
  console.log('LOG BEING HIT');
  response.send('Some text');
});
app.use(handleError);

// Express let's us us any function we want, as long as we are managing our `Request` and `Response`

//  Middleware
function logger(request, response, next) {
  console.log(request.method);
  // if (request.method === 'GET') {
  //   next('Something went wrong'); // this argument triggers an error handler If one is configured on your app object.
  // } else {
  next(); // has to run in order to complete the response.
  // }
}

// Will only run if there is an error
function handleError(err, request, response, next) {
  console.error('UH OHHHHH', err);
  next();
}

module.exports = app;
