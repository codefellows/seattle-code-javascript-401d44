'use strict';

// our entry point?
// this place where all the layers of our app come together
//  right now we have 1 single layer - express http interface
const app = require('./app.js');

// app.listen(3000, () => console.log('Server is up'));
app.start();
