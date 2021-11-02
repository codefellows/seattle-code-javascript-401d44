'use strict';

class MessageQueue {
  constructor() {
    this.messages = {};
  }

  add(clientId, message) {
    // create a new object every time we add something to the queue
    // this.messages = { clientId: [message] };

    // add a key value pair to the an already existing object
    if (!this.messages[clientId]) {
      this.messages[clientId] = [message];
    } else {
      // create a key in an object literal (this.messages) using the given client ID.
      this.messages[clientId].unshift(message);
    }
  }

  received(clientId, message) {
    
    //use given clientId, to grab the queue / array
    if(this.messages[clientId]) {
      let queue = this.messages[clientId];
      
      // check what is at the front of the queue.
      let frontOfQueue = queue[queue.length - 1]; // queue.peek();

      // compare whats at the front with our given message.
      if (frontOfQueue === message) {
        queue.pop(); // queue.dequeue();
        return;
      }
    }
    // if none of this works, throw an error.
    throw new Error ('Invalid Message Receipt');
  }

  fetch(clientId) {
    
  }

  getAll(clientId) {

  }
}

module.exports = MessageQueue;
