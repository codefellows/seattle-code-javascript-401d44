# Redux - Asynchronous Actions

Connecting a Redux application to a backend service (i.e. an API) requires a bit of additional work, as asynchronous actions can cause issues with the internal Redux store management mechanisms. Today, we will be exploring Redux middleware, specifically "Thunk" which provides the mechanism to work asynchronously with Redux

## Learning Objectives

### Students will be able to

#### Describe and Define

- Redux Middleware
- Thunk and why it's necessary

#### Execute

- Perform asynchronous redux actions
- Take advantage of lifecycle hooks

## Today's Outline

<!-- To Be Completed By Instructor -->

## Notes

### Thunking for Data...

Using Redux actions to connect to remote APIs via Thunk Middleware

Normally, action generators return a function, like this:

```javascript
const get = (payload) => {
  return {
    type: 'GET',
    payload: payload
  }
}
```

But often, you'll need your actions to do some asynchronous action before you dispatch it to the reducer. For example, you may need to get something from a remote api.

In this case, we want to set it up like this, where the action you dispatch from your React App returns a function, not an actual action object, which is what Redux **expects** and **requires**

```javascript
let api = 'https://api.mockable.io/api/v1/stuff';

export const get = () => dispatch => {
  return utils.fetchData(api).then(records => {
    dispatch(getAction(records));
  });
};

const getAction = payload => {
  return {
    type: 'GET',
    payload: payload,
  };
};
```

So, we will implement special redux middleware, called "thunk", which inspects every dispatched action and then either lets it go through (in the case of a normal action that returns an object) or it processes the function and then dispatches what that function returns.

Notice in the example above, that the function we ran for the action is curried, and receives `dispatch()`, which it calls with the payload it got from the server.

**What does thunk middleware look like?**

```javascript
export default store => next => action =>
  typeof action === 'function'
    ? action(store.dispatch, store.getState)
    : next(action);
```

In Redux, middleware is implemented as a curried function that ultimately evaluates the action and determines whether it's a function or not. If so, it gets invoked with the store's `dispatch()` and `getState()` methods. Otherwise (a normal action creator), it simply runs your action.

At its base level, this is all we really need.  However, we're going to be using the `redux-thunk` npm module in our production applications, as it provides more stability and error checking for us.
