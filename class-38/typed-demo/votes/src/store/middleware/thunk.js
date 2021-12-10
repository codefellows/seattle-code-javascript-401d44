// a function that tells reduc to wait until we get and object
  // if you get a function, call the function 
  // if you get and object, use that as your action

const thunk = store => next => action => 
  typeof action === 'function'
    ? action(store.dispatch, store.getState)
    : next(action)

export default thunk;
