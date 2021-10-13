# Redux - Combined Reducers

Redux excels at not only global state, but complex global state. Today, we'll be using multiple reducers to manage separate parts of the store

## Learning Objectives

### Students will be able to

#### Describe and Define

- How complex state can be broken down into multiple reducers
- The sharing of actions between reducers

#### Execute

- Implementation of multiple reducers in a Redux app
- Managing complex shared state between components

## Today's Outline

<!-- To Be Completed By Instructor -->

## Notes

### Combined Reducers

Combined reducers is nothing more than pulling in more than one reducer from source and creating a keyed object from them.

```javascript
import todoReducer from './todo.store.js';
import itemReducer from './item.store.js';

let reducers = combineReducers({
  todo: todoReducer,
  item: itemReducer,
});
```

Once done, any component can reach into the store and get either one, both, or all ...

```javascript
import * as actions from "../../store/todo.store.js";
import * as itemActions from "../../store/item.store.js";

const mapStateToProps = state => ({
  todo: state.todo,
  item: state.item,
});

const mapDispatchToProps = (dispatch, getState) => ({
  deleteItem: id => dispatch(actions.deleteItem(id)),
  hideDetails: id => dispatch(itemActions.hideDetails()),
});

```

What's the point?

- Obey the Single Responsibility Principle
  - Each reducer really should have only 1 part of state to manage

    ```javascript
    // YES:
    const initialState = { value: 0 };

    // NO:
    const initialState = { value: 0, numChanges:0, changes:[] };
      // Move those to separate reducers/actions
    ```

  - Is this more work/boilerplate?  Yes.
  - Does it allow you decouple logic? Yes.

What about the actions?

- Each reducer technically has it's own actions and creators.
- However, they can cross over and both be dispatched.
  - In this example, if an action of type 'RESET' is ever dispatched by any action creator, both of the reducers would actually respond.
  - This can be` very powerful, as often times actions are valid for multiple reducers
  - ... but this behavior needs to be well understood or it'll cause unintended consequences.

  ```javascript
  //counter.store.js
  export default function reducer (state = initialState, action) {
    switch (action.type) {
      case 'INCREMENT':
        return { value: state.value + 1 }
      case 'RESET':
        return {value:0};
      default:
        return state;
    }
  }

  //history.store.js
  export default function reducer (state = initialState, action) {
    switch (action.type) {
      case 'CLICK':
        return { clicks: state.clicks + 1 }
      case 'RESET':
        return {clicks:0};
      default:
        return state;
    }
  }
  ```
