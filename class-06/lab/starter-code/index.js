'use strict';

require('dotenv').config(); 
const express = require('express');
const app = express();
const idx = require('./src/server.js');


const PORT = process.env.PORT || 3001;


module.exports = {
  idx,
  start: app.listen(PORT, () => console.log(`Server Running on ${PORT}`)),
};