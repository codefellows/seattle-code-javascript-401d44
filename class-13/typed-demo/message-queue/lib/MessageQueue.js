'use strict';

class MessageQueue {
  constructor() {
    this.messages = {};
  }

  add(clientId, message) {
    let clientQueue = this.messages[clientId];

    if(clientQueue) {
      clientQueue.unshift(message);
    } else {
      this.messages[clientId] = [message];
    }
  }

  received(clientId, message) {
    let queue = this.messages[clientId];

    if(!queue) {
      throw new Error('No queue for that client ID');
    }

    let nextMessage = queue[queue.length -1];
    if (JSON.stringify(nextMessage) != JSON.stringify(message)) {
      throw new Error('Message Queue Error');
    } else {
      // removeing nextMessage from the queue.
      return queue.pop();
    }
  }

  getAll(clientId) {
    let queue = this.messages[clientId];
    return queue || [];
  }
}

module.exports = MessageQueue;
