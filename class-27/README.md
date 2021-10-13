# `useState()` Hook

To this point, state has been owned and managed solely in Class based React components, using `this.state` with `this.setState()` and instance methods to manage it all.

Newer versions of React now allow for "function components" to also manage their own state, using a newly exposed API, called "Hooks"

## Learning Objectives

### Students will be able to

#### Describe and Define

- Pros/Cons of Functional and Class Components
- Use of the state hook for functional components
- Use of the effect hook to tap into the lifecycle
- Describe the lifecycle of a React component

#### Execute

- Use the Hooks API to manage state in a functional component
- Use an effect hook to manage state at various (tactical) times during the life of a component

## Today's Outline

<!-- To Be Completed By Instructor -->

## Notes

### Hooks

React hooks allow to to easily create and manage state in a **functional** component.

Hooks are JavaScript functions, but they impose additional rules:

- Hooks must be named with a `use` prefix (i.e. `useFishingPole`)
- Only call Hooks at the top level. Don't call Hooks inside loops, conditions, or nested functions.
- Only call Hooks from React function components. Don't call Hooks from regular JavaScript functions. (There is just one other valid place to call Hooks — your own custom Hooks. We'll learn about them in a moment.)

#### Built In Hooks

##### `useState()`

Returns a stateVariable and setterFunction for you to use to manage state in a functional component

In this example ...

- `clicks` is the state variable, which will store the number of clicks
- `setClicks` is a function that is called to change the value of clicks

How does this work?

- by convention, we use `set` + `statevariable` (camel cased) to name this function
- `useState()` takes a single param, which is the initial value to assign to the state variable
- You can call your setter function .. i.e. `setClicks(7)` and the attribute value you call the function with is used as the new value for the state variable.

```javascript
 import React from 'react';
 import { useState } from 'react';

 function Counter() {
   const [clicks, setClicks] = useState(0);

   return (
     <div>
       <h2>Button has been clicked {clicks} time(s)</h2>
       <button type="button" onClick={() => setClicks(clicks + 1)}>
         Update Count
       </button>
     </div>
   );
 }

 export default Counter;
```
