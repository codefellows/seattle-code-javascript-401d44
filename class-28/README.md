# Component Lifecycle / `useEffect()` Hook

To this point, state has been owned and managed solely in Class based React components, using `this.state` with `this.setState()` and instance methods to manage it all.

Newer versions of React now allow for "function components" to also manage their own state, using a newly exposed API, called "Hooks"

## Learning Objectives

### Students will be able to

#### Describe and Define

- Describe the lifecycle of a React component
- Use of the effect hook to tap into and operate on the component lifecycle
- Watching state and other conditions

#### Execute

- Use an effect hook to manage state at various (tactical) times during the life of a component

## Today's Outline

<!-- To Be Completed By Instructor -->

## Notes

### `useEffect()` and Component Lifecycle

#### The "Effect" hook runs a callback with every component render

```javascript
useEffect( () => {
  // Run your code here
});
```

In addition to the callback, the effect hook can accept a second parameter (an array of watchers), indicating your preference as to when it might run or not run. The effect hook will only run when variables in that array change from the previous render.

Effectively, this is an Event Listener, where the event is a changed variable value

- `[]` runs the effect only once (the initial render) as there's nothing to watch, so nothing will change
- `[counter]` runs the effect only if the variable `counter` has a different value than the previous rendering

```javascript
useEffect( () => {
  // This code only runs on the initial render
}, []);
```

```javascript
useEffect( () => {
  // This code only runs if the value for the counter variable changes
}, [counter]);
```

#### Cleaning up a component on Un-Mount

There are times when you'll want your component to do clean up work when it's un-mounted (routing hides it, user reloads, etc). For example, you might want to stop listening for socket events so you don't have a bunch of duplicate listeners out there.

If your effect **returns a function**, that function will execute when the component un-mounts

> Note that you can setup one effect to do all of your cleanup work, or each effect could return it's own function to clean it's own memory usage.

```javascript

useEffect( () => {

  // Setup an event listener when we first render our component
  socket.on('greenlight', handleTheGreenLight);

  // Remove that event listener if the component is um-mounted.
  // If we don't do this, if the component is ever re-mounted, it'll
  // create a second event listener on 'greenlight' and that handleGreenLight
  // will run multiple times

  return () => socket.off('greenlight', handleTheGreenLight);

}, []);

```
