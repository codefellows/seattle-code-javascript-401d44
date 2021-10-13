# Readings: Async/Await

Below you will find some reading material, code samples, and some additional resources that will help you to better understand asynchronous Javascript, specifically Promises

- Watch the [Shred Talk Video: Async/Await](https://youtu.be/o1B395-3Elg){:target="_blank"}
- Review the [Demo Code](./DEMO.md){:target="_blank"}
- Complete the [Assignment](./LAB.md){:target="_blank"}

## Javascript Async/Await Pattern

Promises, although a big improvement over Callbacks for asynchronous functionality, still have a slightly messy syntax that can be confusing, especially when nesting. With ES6, Javascript introduced the `async` / `await` pattern to add even more syntactic sugar on promises.

Here's a simple function that returns a promise, and a standard call that invokes that function, and uses `.then()` and `.catch()` to interact with it.

```javascript
function goAndGetSomeData() {
  return new Promise( (resolve,reject) => {
    if( true ) {
      resolve("It totall worked!");
    }
    else {
      reject("Failure is always an option...");
    }
  })
}

goAndGetSomeData(params)
  .then( someData => {
    // do something with someData
  })
  .catch( error => {
    // do something with the error
  });
```

Here's another way to call that function, but using an `async` function instead of the `.then()` syntax...You simply tag a function as `async` and then within it, `await` the promise to happen. Effectively, the variable you assign to the `await` is the same thing you would have gotten in a `.then()` callback.  This just looks a lot nicer.

```javascript
async function getData() {
  let someData = await goAndGetSomeData()
  // do something with someData
}

getData();
```

Handling Errors can be done in 2 ways.

1. If you want to handle the error in the async function, you wrap the call in a `try{}/catch()`

   ```javascript
   async function getData() {
     try {
       let someData = await goAndGetSomeData()
       // do something with someData
     } catch(error) {
       // handle the error
     }
   }

   getData()
   ```

Alternatively, you can handle the error in the code that calls your function, you can deal with it as you please outside of the `async` function call.

   ```javascript
   async function getData() {
      let someData = await goAndGetSomeData()
      // do something with someData
   }

   getData().catch(error => console.log(error));
   ```

## Additional Resources

- Video: [what the heck is the event loop anyway](https://www.youtube.com/watch?v=8aGhZQkoFbQ){:target="_blank"}
- [MDN - async/await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function){:target="_blank"}
