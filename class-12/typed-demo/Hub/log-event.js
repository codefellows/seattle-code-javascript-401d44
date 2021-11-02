'use strict';

const logEvent = (event) => (payload) => {
  // log event??
  let log = {
    event,
    time: new Date().toString(),
    payload,
  };

  console.log('EVENT', log);
};

module.exports = logEvent;
