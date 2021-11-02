'use strict';

const caps = require('../Hub/events.js');
const faker = require('faker');
const logDelivery = require('./log-delivery.js');

caps.on('delivered', logDelivery);

function pickup(storeName) {
  let payload = {
    'store': storeName,
    'orderId': faker.random.alphaNumeric(15),
    'customer': faker.name.findName(),
    'address': faker.address.streetAddress(),
  };

  caps.emit('pickup', payload);
}

pickup('1-800-flowers');
