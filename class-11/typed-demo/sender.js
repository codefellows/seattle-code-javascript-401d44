'use strict';

const messenger = require('./messenger.js');
require('./receiver.js');

const input = process.argv[2];
const messageId = Math.floor(Math.random() * 100000000);

messenger.on('received', (payload) => {
  console.log('Confirmed receipt by:', payload);
});

messenger.emit('message', {
  id: messageId,
  text: input,
});

