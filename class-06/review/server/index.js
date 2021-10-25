'use strict';

// bring in our dependencies
const express = require('express');
const app = express();

const { jokes } = require('../model');

// forms a body on the request, whenever json is attached to the request.
app.use(express.json());

// configure routes on app:
app.get('/jokes', async function(req, res) {
  let allJokes = await jokes.findAll();
  res.status(200).json(allJokes);
});
app.post('/jokes', function(req, res) {

});
app.put('/jokes/:id');
app.delete('/jokes/:id');

module.exports = app;
