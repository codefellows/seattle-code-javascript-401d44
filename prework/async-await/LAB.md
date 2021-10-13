# LAB: Promises

In this lab, you will be exploring asynchronous Javascript using async/await

## Getting Started

Fork the [Online REPL](https://repl.it/@codefellows/AsyncAwait){:target=_blank} for this assignment. Complete your work in the online editor

## Requirements

### Write an asynchronous function and call it with async/await

- Write function called getRandomNumber that returns a promise
- In the promise, write a setTimeout() that will resolve the promise with a random number after .5 seconds
- Write an async function that invokes the getRandomNumber function, awaiting the random number, and printing that to the console.
- Invoke your async function

### Fetch remote data using async/await

- Write an asynchronous function that accepts 1 parameter
  - A city name

 When invoked, this function should use `superagent` to retrieve the city data from the <geocode.xyz> API, which uses a URL formatted as follows:

  > <https://geocode.xyz/amman?json=1>

- Once retrieved, print to the console, the latitude and longitude
- Invoke your async function with a few cities as a test

## Assignment Submission Instructions

Submit a link to your completed REPL
