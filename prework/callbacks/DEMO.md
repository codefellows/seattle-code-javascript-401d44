# Callback Functions - Demo Code

## Standard/Synchronous Callbacks

```javascript
const fs = require('fs');
// File System Module for Node.js

let myCallback = (data) => {
  console.log(data);
}

let useTheCallback = (words, callback) => {
  console.log('1. Calling the CB');
  callback(words);
  console.log('2. Back from the CB');
}

useTheCallback('Hello', myCallback);
```

## Error First Callbacks`

```javascript
let errorFirstCallback = (err, data) => {
  if(err) {
    console.error('Whooops', err);
    return;
  }
  console.log('Received', data);
}

let useTheErrorFirstCallback = (words, cb) => {
  console.log('1, calling the EF Callback');
  cb('Bad Words', words);
  console.log('3, back from the EF Callback');
}

useTheErrorFirstCallback( 'Hello', errorFirstCallback );
```

## Asynchronous Callbacks

```javascript

let asyncCallback = (err,data) => {
  if(err) { throw err; }
  console.log('Received', data);
}

let useTheAsyncCallback = (words, cb) => {
  console.log('1, calling the callback');

  setTimeout( () => {
    cb(undefined, words);
  }, 500);

  console.log('2, back from the callback');
}

useTheAsyncCallback('Hello', asyncCallback);

console.log('Running after the async function call');
```

## Async Example: Reading Files

```javascript
console.log('reading');

fs.readFile( './words.txt', (err,data) => {

  if(err) { throw err; }
  let ucWords = data.toString().toUpperCase();
  let contents = Buffer.from(ucWords);

  fs.writeFile('./words.txt', contents, (err,data) => {
    if(err) { throw err; }

    fs.readFile('./words.txt', (err,data) => {
      if(err) { throw err; }
      console.log(data.toString());
    })
  })

});

console.log('all done');
```
