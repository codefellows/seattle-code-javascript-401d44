'use stric';

const express = require('express');
const { phrases } = require('../model');

const app = express();

// gets all phrases
app.get('/phrase', async (req, res) => {
  let phraseData = await phrases.findAll();
  res.send(phraseData);
});
// gets ONE phrase using an id on the path, make sure you include a semi colon!
app.get('/phrase/:id', () => {

});
// create a new phrase in the phrase table
app.post('/phrase', () => {

});
// update a phrase, how do we know which one?
app.put('/phrase/:id', () => {

});
app.delete('/phrase/:id', () => {

});

module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => {
      console.log('Server is up!');
    });
  }
};
