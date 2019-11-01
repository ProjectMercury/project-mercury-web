import { combineReducers, createStore, compose, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

import { userReducer } from './reducers/userReducer';
import { inputReducer } from './reducers/inputReducer';
import { optionsReducer } from './reducers/optionsReducer';

const rootReducer = combineReducers({
  user: userReducer,
  inputs: inputReducer,
  options: optionsReducer
});

const middleware = [thunk];

const store = createStore(
  rootReducer,
  {},
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  )
);

export default store;
