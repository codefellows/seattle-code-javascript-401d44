'use strict';

const Events = require('events');
const eventPool = new Events(); // this is our Subject, the thing that is being listened to, and object with dependants (programs that are paying attention to this). 


/**
 * Observer: the thing that is doing the listening.  Responds to the subject.
 * Each of these functions represents some observer.
 */


// let define a 'light' event
eventPool.on('light', () => {
  console.log('The light has changed');
});
// brightness change
eventPool.on('light', (payload) => {
  console.log('Current brightness level:', payload.brightness);
});
eventPool.on('light', pupils);


eventPool.on('wind', (payload)=> {
  console.log('Wind has changed', payload.irritation);
});
eventPool.on('wind', eyelids);


function pupils({ brightness }) {
  if (brightness > 50) {
    console.log('pupils get smaller');
  } else {
    console.log('pupils get larger');
  }
}

function eyelids({ irritation }) {
  if (irritation > 60) {
    console.log('We need to squint');
  } else if (irritation > 30) {
    console.log('Aaaaah, close eyes, eyes watering');
  } else {
    console.log('everything is fine');
  }
}


setInterval(() => {
  eventPool.emit('light', { 
    brightness: Math.floor(Math.random() * 100),
  });
  eventPool.emit('wind', {
    irritation: Math.floor(Math.random() * 100),
  });
}, 2000);
