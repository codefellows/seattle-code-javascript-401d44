# Readings: Promises

Below you will find some reading material, code samples, and some additional resources that will help you to better understand asynchronous Javascript, specifically Promises

- Watch the [Shred Talk: Promises](https://youtu.be/4bPdjAerRzQ){:target="_blank"}}
- Review the [Demo Code](./DEMO.md){:target="_blank"}
- Complete the [Assignment](./LAB.md){:target="_blank"}

## Javascript Promise Pattern (promises)

 Promises are one way to manage Asynchronous actions. Like a callback, a promise allows you to execute some code and "move on", allowing for that code to take as long as it needs to run.  Unlike a callback, the syntax of a promise feels and reads a bit more "inline" ...

> **A promise says, "Hey, Javascript, you go ahead and do some work.  I don't care how long it takes and I'm going to go ahead and keep working ... but let me know when you're done `.then()` give me the data and let me deal with it myself"**

```javascript
console.log('Start');
goAndGetSomeData(params)
  .then( someData => {
    // that goAndGetSomeData function is done, and it seems to have returned `someData` ...
    // do some amazing work with someData and then return `something`
    return something;
  })
  .catch( error => {
    // if there was a problem, catch it and something with the error
  });
console.log('After');
```

Asynchronous promises are identified as any function that simply "returns an instance of `Promise`" Promises, like error first callbacks, can either "work" or "fail" ... or more accurately stated "Resolve" or "Reject"

The code above was possible because the `goAndGetSomeData` function was written to return a promise, which handles both the "it worked" (resolve) and "it failed" (reject) cases.

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
```

Promises can be chained to run in sequence, or can run independently, and out of sequence.

The code below looks like these calls will run sequentially. However, since they are calling promises, javascript runs them in the event loop, and the `.then()` callbacks will end up in the callback queue and on the stack in the order they complete running, not in the order they were created.

```javascript
  goAndGetSomeData().then( data => console.log(data) );
  goAndGetSomeData().then( data => console.log(data) );
  goAndGetSomeData().then( data => console.log(data) );
```

Comparatively, this "promise chain" runs in sequence, because each `.then()` invokes the next `.then()`

- Anything returned by a `.then()` is technically another promise that resolves to the next `.then()`

```javascript
  goAndGetSomeData()
   .then( data => { console.log(data); return data; )
   .then( moreData => { console.log(moreData); return moreData; )
   .then( evenMoreData => { console.log(evenMoreData); }
```

Use `.catch()` to consume and handle errors. Note that a `.catch()` that returns any value would be picked up by the next `.then()`, effectively "fixing" a bad call in mid-flight

```javascript
  goAndGetSomeData()
   .then( data => { console.log(data); return data; )
   .catch( error => console.error(error) )

  goAndGetSomeData()
   .then( data => { console.log(data); return data; )
   .catch( error => {console.error(error); return 'ok'; })
   .then( moreData => { console.log(moreData); return moreData; )
   .then( evenMoreData => { console.log(evenMoreData); }
```

## Additional Resources

- Video: [what the heck is the event loop anyway](https://www.youtube.com/watch?v=8aGhZQkoFbQ){:target="_blank"}
- [MDN - promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise){:target="_blank"}
