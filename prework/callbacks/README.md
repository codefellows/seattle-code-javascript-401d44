# Readings: Callbacks

- Watch the [Shred Talk: Callbacks](https://youtu.be/xLDI7hIgU4o){:target="_blank"}
- Review the [Demo Code](./DEMO.md){:target="_blank"}
- Complete the [Assignment](./LAB.md){:target="_blank"}

## Javascript Callback Pattern

Node.js made the decision to have all asynchronous events be handled using error first callbacks. The main advantage of this is that all asynchronous methods have a consistent interface. This means that when you are working with asynchronous Node.js code, you can always assume how the callback is going to be formatted, making your life as a developer much easier!

Having a consistent callback interface has also made it possible for libraries to be written that assist Javascript developers in handling complex async code!

> **A callback says, "Hey, Javascript, you go ahead do some work. I don't care how long it takes, and I'm going to go ahead and keep on working ... but when you're all done, here's a function I want you to run."**

That function is the callback, and it operates on a nicely standardized signature.

### Defining an Error First Callback

- a callback is simply a function that is passed as an argument to another function
- "error first" callbacks have the function signature `(err, result) => {}`
  - the first parameter is reserved for an error
    - the value will be `null` or `undefined` if there is no error
  - the second callback is reserved for any successful response data
    - the value will be `null` or `undefined` if there is no data
    - not every Node.js method passes data into the callback
    - in methods that do not resolve data, success is defined as a lack of an error

## Additional Resources

- Video: [what the heck is the event loop anyway](https://www.youtube.com/watch?v=8aGhZQkoFbQ){:target="_blank"}
- [error first callbacks](http://fredkschott.com/post/2014/03/understanding-error-first-callbacks-in-node-js/){:target="_blank"}
- [fs module docs](https://nodejs.org/dist/latest-v6.x/docs/api/fs.html){:target="_blank"}
