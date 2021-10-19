# Class 02: More Express!

## Warm Up

Callbacks! What is a callback?
* A function, that can be passed as a parameter / argument.
* Creating our own `array.prototype.map` function.

```js

let people = ['Jacob', 'Adrian'];

let roles = people.map((person) => {
  if (person === 'Jacob') {
    return 'instructor'
  } else {
    return 'TA'
  }
}); // takes a callback, the callback runs for every item in the array and can return a new value. the new value replaces the item in the original array (but does not mutate the original).

console.log(roles); // [instructor, TA]

// Write a function called map, that takes in an array and a function as arguments.  Returns a copy, of the original array with it's contents replaced by whatever the callback function returns.
```

### Solution

* Inputs
 1. Some array: ['Jacob', 'Adrian'];
 2. Some function: `(person) => {if (person === 'Jacob') { return 'instructor' } else { return 'TA' }};`
* Outputs: ['instructor', 'TA'];
* Algorithm

1. Make a new Array
2. for loop to iterate the input array.
   1. Place the return value of the callback ON the index of the input array, INTO the new Array.
3. return the new array.

* Code

```js

let people = ['Jacob', 'Adrian'];

// complete this
function map(arr, cb) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    let result = cb(arr[i]);
    newArray[i] = result;
  }
  return newArray;
}

let result = map(people, (person) => {
  if (person === 'Jacob') {
    return 'instructor'
  } else {
    return 'TA'
  }
});

console.log(`Map returns a modified array: ${result == ['instructor', 'TA']}`);

```

## Code Review

* Marquesa: We DO need a `workflows` folder inside a `.github` folder.
  * Our demo code, did NOT specify a `/` route handler (a function that runs).
* Justin: What is the `log` file doing.
  * Specifically what is the `next` function?
* Valton: Tests won't run.
  * can't find jest, `node_modules` aren't where hey need to be.

Let's talk Express and Node:

1. What is Node JS?
   1. let's us run JS on our computer / outside of a browser.
   1. A runtime.
   1. A libary: is something like express, that would run in our NodeJS runtime.
1. What is the `require` function?
   1. A function that allows us to use a library or component from a library.
   1. Gives the runtime context, and an object to use.

```js

const express = require('express');

```

1. What is a Node Module?
   1. A file / group of files in Node.
   1. A program that is exported to be used elsewhere.

1. What is Express used for?
   1. To create a backend server side.
   1. "URL pathways" => HTTP Requests.
   1. Allows for RESTful web service design, but does force to be RESTful.

1. What is a `Request`?
   1. Something sent to a server.
   1. In `Express` how do interface with this `Request`?
      1.  we specify `.get` / `.post` / `.put` / `.delete
      1.  Passing a callback, that has a parameter that interfaces with our `Request`.

1. What is a `Response`?
   1. Something that is sent back from the server.
   1. In Express we interface with this in the same way, we just define another parameter in our callback to represent this object.

## Express Routing

How does express let us express ourselves?

* What is Middleware in Express?

## Lab Prep
