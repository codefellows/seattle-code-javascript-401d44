'use strict';

const socketio = require('socket.io');
const server = socketio(3000);

// socket connection event!
server.on('connection', socket => {
  console.log('Socket connection esablished: ' + socket.id);

  const eventPool = [
    'publish',
    'received',
  ];

});
