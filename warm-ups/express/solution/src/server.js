'use strict';

const express = require('express');
const app = express();

// Set the view engine for templating
app.set('views', `${__dirname}/views`);
app.set('view engine', 'ejs');

// Statics
app.use( express.static(`${__dirname}/../public`) );

/// App Level MW
app.use(express.json());

app.get('/', (req,res) => {
  res.send('<h1>Hello</h1>');
});

app.post('/save', (req,res) => {
  res.json(req.body);
});

app.get('/err', (req,res,next) => {
  next('this is a legit error');
});

app.get('*', (req,res) => {
  res.status(404);
  res.statusMessage = 'Not Found';
  res.render('not-found', {request:req});
});

app.use( (err,req,res,next) => {
  res.status(500);
  res.statusMessage = 'Server Error';
  res.render('error', {request:req, error:err});
});

module.exports = {
  server: app,
  start: () => {
    const PORT = process.env.port || 3000;
    app.listen(PORT, () => console.log(`Server up on port ${PORT}`));
  },
};
