// entry point for the redux config
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import peopleReducer from './people.slice.js';

const reducers = combineReducers({
  people: peopleReducer,
});

const store = configureStore({ 
  reducer: reducers,
});

export default store;
