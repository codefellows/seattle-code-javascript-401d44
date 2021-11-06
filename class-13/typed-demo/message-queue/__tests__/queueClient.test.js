'use strict';

const QueueClient = require('../lib/QueueClient.js');

jest.mock('socket.io-client');

describe('testing the queue client', () => {
  it('it should trigger and event emissions', () => {

    let testClient = new QueueClient('test', 'test');

    testClient.trigger('test', { test: 'test' });
    expect(testClient.socket.emit).toHaveBeenCalledWith('test', { clientId: 'test', test: 'test' });
  });
});
