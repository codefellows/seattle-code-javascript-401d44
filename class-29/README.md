# Advanced State with Reducers

State is often more complex than simply updating a value directly. Often, we need to update values conditionally. Additionally, state might be more complex than a single value. In these cases, where we need more articulated access, we can use a "reducer" which allows us to interact with state using a common API

## Learning Objectives

### Students will be able to

#### Describe and Define

- Reducers
- Actions
- Dispatching

#### Execute

- Manage state using a reducer with the `useReducer()` hook in a functional component

## Today's Outline

<!-- To Be Completed By Instructor -->

## Notes

### `useReducer()`

There are 4 things to consider when using the reducer pattern to manage state

#### 1. Initial State

Simply put, this is a variable that describes your state before the app starts. This can be a simple as a single variable or it can be an array, object, or any combination. For example:

```javascript
const initialState = {
  show: "Sesame Street",
  characters: [
    {name: "Ernie", color: "orange" },
    {name: "Burt", color: "yellow" }
  ]
};
```

#### 2. Actions

Describe what action you want to take with your state, as well as any additional data or information that might help complete that action. Think of actions as a consistent way to call a function.

Actions are always plain objects with 2 keys: `type` and `payload`

The "type" must match a handler in the reducer function...

```json
{
  type: 'ADD_CHARACTER'
  payload: { name: "Cookie Monster", color: "blue", age: 57 }
}
```

#### 3. Reducer Function

The reducer function, much like `Array.reduce()` operates by accepting the previous state along with some data, performs an action, and **returns the next state**.

We default it to seeing the initial state which would be the case for the first time your application starts.

The reducer looks at the action, and based on the `type` property, it uses a `swithc/case` statement to do the handle change to state, and then returns the changed state.

> Note: We don't change the state (it's immutable). Rather, we return what the next state should be. A common pattern will see is the use of the spread operator (`...`) with the state object as we return the next state without mutating the original.

In this example, to "add" a character, we spread out state (makes a copy) and further spread out the characters and append one. Can you describe how "remove" works?

```javascript
function characterReducer( state=initialState, action ) {

  switch( action.type ) {
    case 'ADD_CHARACTER':
      return { ...state, characters: [...state.characters, action.payload] };
    case 'REMOVE_CHARACTER':
      return {...state, characters: state.characters.filter( char => char.name !== payload.name ) }
    default:
      return state;
  }
}
```

#### 4. Dispatching Actions

Given an initial state, the shape of what an action looks like, and a reducer function that could run your action, how do you actually do it?

You might think that running something like this would do it `let newState =  reducer(state, myAction);`

Technically, that's what needs to happen, but you don't have permission to do that in react. Rather, we **dispatch the action** we want to run, using the `useReducer()` hook and "dispatch" the action you want to run. React knows how to hook it all together and update the component's state.

```javascript
  function myComponent(props) {

    // This identifies your reducer function and "runs it" the first time, using your initial state
    const [state, dispatch] = useReducer(characterReducer, initialState);

    // Later, when you want to add
    function addCharacter() {

      const character = { name: "Elmo", color: "red" };

      // What we want the reducer to do ....
      const action = {
        type: "ADD_CHARACTER",
        payload: character
      };

      // Make the reducer do it ...
      dispatch(action);
    }
  }

```
