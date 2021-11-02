'use strict';

const caps = require('../Hub/events.js');
const handlePickup = require('./handle-pickup.js');

caps.on('pickup', handlePickup);
