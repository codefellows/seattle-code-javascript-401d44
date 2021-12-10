import { createStore, applyMiddleware, combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from './middleware/thunk.js';

import candidates from './candidates.js';

let reducers = combineReducers({
  candidates,
});

let store = () => {
  // the second param of creatStore is for middleware
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}

export default store;
