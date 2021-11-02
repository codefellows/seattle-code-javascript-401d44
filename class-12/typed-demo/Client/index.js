'use strict';

const client = require('socket.io-client');

function connect(namespace) {
  return client(`http://localhost:3030/${namespace}`);
}
// connect our client to the server
const messageClient = client('http://localhost:3030/messages'); // add a namespace to the end of your connection string

const defaultClient = client('http://localhost:3030');

messageClient.emit('message', 'hello world');
messageClient.on('received', console.log);
