# Promises - Demo Code

```javascript
'use strict';
const superagent = require('superagent');

// Root Developer (API)
function checkForWords(words) {
  return new Promise( (resolve,reject) => {
    let pauseTime = Math.ceil(Math.random()*1000);
    setTimeout( () => {
      if(words) { resolve( `OK @ ${pauseTime}`); }
      else { reject(`BAD @ ${pauseTime}`); }
    }, pauseTime)
  });
}

// Will be OK
checkForWords('soup')
  .then( status => console.log('SUCCESS:', status) )
  .catch( err => console.error('ERROR:', err) )

// Will produce an error
checkForWords()
  .then( status => console.log('SUCCESS:', status) )
  .catch( err => console.error('ERROR:', err) )


// Run 10 requests. These will happen out of order, returning in the order
// they finsih instead
for( let i = 1; i<=10; i++) {
  checkForWords(i)
    .then( result => console.log(i, result) )
    .catch( err => console.log(i, err) )
}


// This is a promise chain, which happens "in order", as they pass
// their results (or another promise) to the next .then
checkForWords(true)
  .then(data => { console.log(data); return checkForWords(true) })
  .then(data => { console.log(data); return checkForWords(true) })
  .then(data => { console.log(data); return checkForWords(true) })
  .then(data => { console.log(data); return checkForWords(false) })
  .then(data => { console.log(data); return checkForWords(true) })
  .then(data => { console.log(data); return checkForWords(true) })
  .then(data => { console.log(data); return checkForWords(true) })
  .catch(err => { console.error(err) })



// Fetch Remote data ... superagent "returns a promise", so we can use `.then()`
superagent.get('http://demo8340031.mockable.io/stuff')
  .then( data => {
    console.log(data.body);
  })
  .catch(err => console.error(err));
```
