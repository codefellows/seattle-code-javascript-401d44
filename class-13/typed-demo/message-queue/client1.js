'use strict';

const QueueClient = require('./lib/QueueClient.js');

const clientId = 'CodeFellows';
const codeFellowsQueue = new QueueClient(clientId, 'messages');

codeFellowsQueue.subscribe('message', (payload) => {
  console.log('Client 1 received message!', payload);
});

codeFellowsQueue.subscribe('delivered', (paylaod) => {
  console.log('Message delivered!!');
});

codeFellowsQueue.trigger('message', { clientId, text: 'hello world' });

