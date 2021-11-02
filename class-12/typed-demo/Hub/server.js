'use strict';

const caps = require('./events.js');
const logEvent = require('./log-event.js');

caps.on('pickup', logEvent('pickup'));
caps.on('in-transit', logEvent('in-transit'));
caps.on('delivered', logEvent('delivered'));

require('../Driver/driver.js');
require('../Vendor/vendor.js');
