'use strict';

const express = require('express');

const app = express(); // instantiate express library
const clothesRouter = require('./routes/clothes.js');
const apiRouter = require('./routes/api.js');

app.use(express.json());

// define routes
// Alex, do we want to be fitting / configuring up our error handlers.

// Chattray: how do we configure both models in our router here?

// do these own files: yes!
// app.get('/clothes');
// app.get('/clothes');
// app.post('/clothes');
// app.put('/clothes');
// app.delete('/clothes');
app.use('/api', apiRouter);
app.use('/clothes', clothesRouter);

// app.get('/food');
// app.get('/food');
// app.post('/food');
// app.put('/food');
// app.delete('/food');

module.exports = {
  app,
  start: (port) => {
    app.listen(port, () => console.log('server is up on ' + port));
  }
};
