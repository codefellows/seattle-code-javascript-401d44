'use strict';

const MessageQueue = require('./MessageQueue.js');

describe('Testing the Message Queue Constructor', () => {
  let test = new MessageQueue();
  let client1 = 'client 1';
  let client2 = 'client 2';


  it('should be able to add a message', () => {
    test.add(client1, 'hello world');
    expect(test.messages[client1][0]).toBe('hello world');
  });

  it('should be able to add multiple messages', () => {
    test.add(client1, 'message 2');
    expect(test.messages[client1][0]).toBe('message 2');
    expect(test.messages[client1].length).toBe(2);
  });

  it('should be able to add multiple messages to multiple client', () => {
    test.add(client2, 'hello world');
    expect(test.messages[client1].length).toBe(2);
    expect(test.messages[client2].length).toBe(1);
  });

  it('should throw an error when confirming message out of order', () => {
    try{
      test.received(client1, 'message 2');
    } catch(e) {
      expect(e.message).toBe('Invalid Message Receipt');
    }
  });

  it('should be able to confirm receipt of message 1', () => {
    let queue = test.messages[client1];
    try {
      test.received(client1, 'hello world');
      expect(queue[queue.length - 1]).toBe('message 2');
      expect(queue.length).toBe(1);
    } catch(e) {
      expect(e).not.toBeTruthy();
    }
  });
});
