# LAB: Promises

In this lab, you will be exploring asynchronous Javascript using Promises

## Getting Started

Fork the [Online REPL](https://repl.it/@codefellows/Promises){:target=_blank} for this assignment. Complete your work in the online editor

## Requirements

### Create and use new promise

Write a function called isEven that receives 1 parameter:

- A Number

... And returns a Promise

- In this function, determine if the number is even
- If so, resolve the promise with a value of true
- Otherwise, reject it with a value of false

Create an array of numbers.

- Iterate the array with a for loop
- At each iteration, call isEven function with the number
- `console.log()` the number and the words 'Is Even.' if the number is even
- Do nothing if it is odd
- Remember, you will be calling a promise function, so handle the "returned" values properly

### Use a promise to do something asynchronous

Fetch the characters from the Star Wars API and create a simple object

- Write a function called getCharacters
- When invoked, make a `superagent` call to the Star Wars API
- With the retuned data, change the results into an object where the key is the character's name and the value is the URL to their page
- Output this JSON object using `console.log()`

## Assignment Submission Instructions

Submit a link to your completed REPL
