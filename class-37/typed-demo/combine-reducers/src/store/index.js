import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import storeFrontReducer from './storefront';
import votesReducer from './votes';
import candidateReducer from './candidates';

const reducers = combineReducers({
  storefront: storeFrontReducer,
  totalVotes: votesReducer,
  candidates: candidateReducer,
});

const store = () => {
  return createStore(reducers, composeWithDevTools());
}

export default store;
