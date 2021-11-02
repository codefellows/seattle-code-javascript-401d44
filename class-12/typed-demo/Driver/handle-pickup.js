'use strict';

const caps = require('../Hub/events.js');

function handlePickup(payload) {
  console.log(`DRIVER: picked up ${payload.orderId}`);
  caps.emit('in-transit', payload);

  console.log(`DRIVER: delievered ${payload.orderId}`);
  caps.emit('delivered', payload);
}

module.exports = handlePickup;
