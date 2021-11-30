# Class 29: Managing Complex React State with Reducers

## Warm Up

[Warm Up Exercise](https://github.com/codefellows/seattle-code-javascript-401d44/tree/main/class-29/warm-up)

## Code Review

* Deploying with gh-pages
* Mocking an API
  * Library for stubbing a fake REST API.
    * Stops all requests in our testing suite, and uses declared endpoints instead.
      * Uses route handlers kinda like express.
  * with `msw` (mock service worker)
* useEffect - using promises instead of async await.
  * The callback provided to the useEffect can't be async await,
    * But it can run an async function.
    * So if you want `async await` syntax, delcare it as a seperate and call it in the callback.

```js

async function fetch() {}

// react will yell at you if this is async
useEffect(async () => {


  // you can call another function that is declared async
  fetch();

  // by default you can use .then / .catch to pass callbacks:
  axios.get()
  .then(response => {})
});

```

## React State with Reducers

What is a Reducer?

* A function that is used to determine a new "appliaction" state.
  * Take all of those state variables and shove them into a single object and call it "state" / "initial state"
  * We define a function called a reducer whose job is to consitently modify the "inistial state".

```js

let state = {
  name: 'Jacob',
  people: ["Adrian", "Hexx"]
}


/// this would be very
state.people => undefined
```

* Reducer function - a function that gets the current state, and some data to modify it with, and always returns the new version of state.
* initial state
* action - a specific change we want to make to our state.
  * User clicks a button and updates some state property.

```js
{
  type: 'ADD_NUMBER',
  payload: 5
}
```

  * the action is passed into the reduces and tells the reducer function 'how' to change state and any 'data' to use.

```javascript

// we usually have the same data type in an array
let values = [1, 4, 50, 4];

// we keep this "shape"
let initialState = {
  name: 'Jacob',
  people: ["Adrian", "Hexx"],
  sum: 0,
}
let reducer = (state, data) => {
  state.sum = state.sum + data;
  return state;
}

let updatedState = values.reduce(reducer, intialState);

console.log(updatedState);
```

* Our reducer hooks will take 2 things: intial state plus an action
  
```javascript

const reducer = (state, action) => {

  switch(action.type) {
    case 'ADD_NUMBER':
      return {...state, sum: state.sum + action.payload};
    default:
      return state;
  }
}

```
