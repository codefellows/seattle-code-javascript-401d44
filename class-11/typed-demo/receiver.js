'use strict';

const messenger = require('./messenger.js');

messenger.on('message', (payload) => {
  let clientId = Math.floor(Math.random() * 1000000000);
  console.log('Client receiver got message!!', payload);

  messenger.emit('received', {clientId});
});
