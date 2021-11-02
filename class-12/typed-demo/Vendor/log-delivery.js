'use strict';

function logDelivery(payload) {

  // log cuistomer name from payload
  console.log(`Thank you, ${payload.customer}`);
}

module.exports = logDelivery;
