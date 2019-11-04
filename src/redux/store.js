import { combineReducers, createStore, compose, applyMiddleware } from "redux";

import thunk from "redux-thunk";

// import { userReducer } from './reducers/userReducer';
import { questionsReducer } from "./reducers/questionsReducer";
import { optionsReducer } from "./reducers/optionsReducer";

const rootReducer = combineReducers({
  // user: userReducer,
  questions: questionsReducer,
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
