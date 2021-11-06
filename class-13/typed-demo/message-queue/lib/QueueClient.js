'use strict';

const client = require('socket.io-client');

class QueueClient {
  constructor(clientId, namespace = '') {
    this.id = clientId,
    this.socket = client.connect(`http://localhost:3030/${namespace}`);
  }

  trigger(event = '', payload = {}) {
    this.socket.emit(event, {
      clientId: this.id,
      ...payload, // spread all other properties of the payload into a new object.
    });
  }

  subscribe(event, fn) {
    this.socket.emit('subscribe', { event, clientId: this.id });
    this.socket.on(event, fn);
  }
}

module.exports = QueueClient;
