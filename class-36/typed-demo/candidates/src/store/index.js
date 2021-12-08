import { createStore, combineReducers } from 'redux';

// add our reducers?
import candidateReducer from './candidates.js';

let reducers = combineReducers({votes: candidateReducer});

// create our "store" - stands for storage not storefront :P
const store = () => {
  return createStore(reducers);
}

export default store;
