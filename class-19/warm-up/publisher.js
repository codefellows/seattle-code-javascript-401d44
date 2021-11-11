'use strict';

const client = require('socket.io-client');
const socket = client.connect('http://localhost:3000');

const input = process.argv[2];
