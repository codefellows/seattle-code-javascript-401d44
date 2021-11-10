'use strict';

const socketio = require('socket.io');

const server = socketio(3000); 

const arrayStrings = ['test', 'hello world', 'foo', 'bar'];

// socket connection event!
server.on('connection', socket => {
  console.log(socket.id);

  // telling the server what to do when the 'socket` emits a `search` event
  socket.on('search', payload => {
    //  get a search string 
    let searchString = payload.text;

    // search our array using the payload
    if (arrayStrings.includes(searchString)) {
      socket.emit('search', {
        results: searchString,
      });
    } else {
      socket.emit('search', {
        results: null,
      });
    }
  });
});
