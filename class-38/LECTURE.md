# Class 38: Async Actions in Redux

## Warm Up

Whiteboard prompt:
`Create a function called getHeight that takes in a Binary Tree as a parameter and returns the height of the tree.`

## Code Review

* Combining Reducers
  * Initial State
  * Reducers function
* Roop: Adding an item adds extra items.
  * Using cart.map to increment / decrement inventoryCount
  * action: { type: "ADD_ITEM_CART", payload: { Product <dName, nName, category,  inventoryCount, description> } }

```javascript
const initialState = {
  cart: { iphone: 2 },  // productionName, count
}

function Reducer (state, action) {

  switch() {
    case "ADD_ITEM_CART":
        // is the item in the cart?

        // what is the inventory count

        return state
  }

}
```

## Redux Middleware

We've seen Middleware in the context of express:

* They are function that runs between the request and the response
  * REQ -> authenticateUser -> function createProduct -> RES.

Middleware is some software (function, and application) that runs between 2 other operations.

* Redux middleware: anythin that runs between the `dispatch` and the reducer.
  * dispatch({type: 'LOGIN', payload: {username, password}}) -> **Middleware** -> reducer(state, {username, password});

Our actions NEEEED to return an object, if they don't do that right away redux has an issue.

### Redux Thunk

Redux only wants Action Objects to pass into the reducer function.  If we want to perfrom the dispatch in between the action being passed into our reducers and the reducers swtich statement, we need to add some `middleware`.

The thunk tells Redux to check the `type` of our reduc input:

```js

  /** 
   * If the input is a function, call the function first.
   * If the input is an object, use it as our action object.
   */ 

const thunk = store => next => action => 
  typeof action === 'function'
    ? action(store.dispatch, store.getState)
    : next(action)

```
