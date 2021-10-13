# LAB: Callbacks

In this lab, you will be exploring asynchronous Javascript using callbacks

## Getting Started

Fork the [Online REPL](https://repl.it/@codefellows/Callbacks){:target=_blank} for this assignment. Complete your work in the online editor

## Requirements

### Standard Callback

Write a function called `isEven` that receives 2 parameters:

- A Number
- A Callback function

Determine if the number is even. If so, invoke the callback with true as an argument, otherwise, false

Create an array of numbers.

- Iterate the array with a for loop
- At each iteration, call the isEven function with the number and a callback function
- The callback should `console.log()` the return value from `isEven()`

### Reading a file, using an Error First Callback

Write a function called `contents` that receives 1 parameter:
    A File Name

- Using the `fs` module, open and read the contents of the file
- Convert the contents to text
- Output the content to the console.
- Output a `console.error()` if anything goes wrong.

You can test this by calling your function with './words.txt' which is a file that exists, and then again with the name of a file that does not exist.

## Assignment Submission Instructions

Submit a link to your completed REPL
