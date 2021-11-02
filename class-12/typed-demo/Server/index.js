'use strict';

const socketio = require('socket.io');

const PORT = process.env.PORT || 3030;

// creates and starts our Web Socket server.
const server = socketio(PORT); // singleton

// creates a socket.io namespace
const messages = server.of('/messages');

server.on('connection', (socket) => {
  console.log('Socket is connected', socket.id);

  // socket methods only talk to a particular socket
  socket.on('message', (payload) => {
    console.log(payload);

    // server methods talk to all sockets in the socket pool
    server.emit('received', {
      id: socket.id,
      payload
    });
  });
});

messages.on('connection', (socket) => {
  console.log(`${socket.id} connected to message server`);

  socket.on('join', (payload) => {
    socket.join(payload.roomname);
  });

  socket.on('message', (payload) => {
    messages.to(payload.room).emit(payload.message);
  });
});

