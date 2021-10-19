'use strict';

const express = require('express');
const app = express();

const logger = require('./middleware/logger.js');
const handleError = require('./middleware/handleError.js');
const phrases = require('./lib/phrase.js');

app.use(express.json());
app.use(logger);
app.use(handleError);

app.get('/repeat', handleRepeat);
app.post('/talk', handleTalk);

function handleTalk(request, response) {
  let { words } = request.body;
  //  add our "phrase" from the request to phrases
  phrases.push(words);
  //  send back the newly created phrase
  response.send(words);
}

function handleRepeat(request, response) {
  // send back the last phrase that was said
  // get the last element from the phrases array!!
  //array.pop();
  let lastPhrase = phrases[phrases.length - 1];
  response.send(lastPhrase);
}

module.exports = {
  app,
  start: app.listen(3000, () => console.log('Server is up')),
};
