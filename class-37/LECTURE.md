# Class 37: Combined Reducers

## Announcments

* Final Whiteboards start next Wednesday.
* Week 9!
  * React-Native
    * JAM-stack (next / gastby)
    * Babel / Webpack
    * Electron

## Warm Up

Let's build Products and Categories into tour API-integration-server!

## Code Review

* How does Redux work?
  * Creates a global store (very similar context)
    * uses a reducer.
  * Helps manage state outside of components (State does no belong to react).
  * Store: all the values in 'state'
  * Reducers: function that takes in an action and the state of our application, returns the new state of our application.
  * Actions: object with type and payload, tells our reducer what to do.

## `CombineReducers` Function
