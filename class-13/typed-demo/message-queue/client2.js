'use strict';

const QueueClient = require('./lib/QueueClient.js');

const clientId = 'CodeFellows';
const codeFellowsQueue = new QueueClient(clientId, 'messages');

codeFellowsQueue.subscribe('message', (payload) => {
  console.log('Client 2 received Message', payload);
});

codeFellowsQueue.subscribe('fetch', (payload) => {
  console.log('Client 2 fetching messages', payload);
  codeFellowsQueue.trigger('received', payload);
});

codeFellowsQueue.trigger('getAll', { clientId });
