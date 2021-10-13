# async/await - Demo Code

```javascript
'use strict';
const superagent = require('superagent');

let checkForWords = (words) => new Promise( (resolve,reject) => {

  let pauseTime = Math.ceil(Math.random()*1000);

  setTimeout( () => {
    if( words )  { resolve(`OK: ${words} / ${pauseTime}`) }
    else  { reject(`BAD: ${words} / ${pauseTime}`) }
  }, pauseTime)

});

// Using an old fashioned promise ...
checkForWords('coffee')
  .then( result => console.log(result) )
  .catch( console.error );


// Using an async function!
async function check(text) {
  try {
    let result = await checkForWords(text);
    console.log(result);
  } catch(e) { console.error(err); }
}

// These will happen out of order (returned in the order they complete)
for( let i = 1; i<=10; i++ ) {
  check(i);
}

// These will be collected in order of creation
async function doMany() {
  let thingsToDo = [];
  for( let i = 1; i<=10; i++ ) {
    thingsToDo.push(checkForWords(i));
  }

  let results = await Promise.all(thingsToDo);
  console.log(results);
}

doMany();

async function getStuff() {
  let results = await superagent.get('http://demo8340031.mockable.io/stuff');
  console.log(results.body);
}

getStuff();
````
