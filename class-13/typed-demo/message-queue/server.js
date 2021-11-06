'use strict';

const socketio = require('socket.io');
const MessageQueue = require('./lib/MessageQueue.js');
const PORT = process.env.PORT || 3030;

const server = socketio(PORT);

const messages = server.of('/messages');
const queue = new MessageQueue();

messages.on('connection', (socket) => {
  console.log('Socket Connected');

  socket.on('subscribe', ({ clientId }) =>  {
    console.log(socket.id, 'joined room ', clientId);
    socket.join(clientId);
  });

  socket.on('message', (payload) => {
    const { clientId } = payload;
    queue.add(clientId, payload);
    console.log(JSON.stringify(queue));

    messages.to(clientId).emit('message', payload);
  });

  socket.on('getAll', ({clientId}) => {
    let allMessages = queue.getAll(clientId);

    for (let i = allMessages.length -1; i >= 0; i--) {
      messages.to(clientId).emit('fetch', allMessages[i]);
    }
  });

  socket.on('received', (payload) => {
    const { clientId } = payload;

    try {
      queue.received(clientId, payload);
      messages.to(clientId).emit('delivered', payload);
    } catch(e) {
      console.error(e);
    }
  });
});
