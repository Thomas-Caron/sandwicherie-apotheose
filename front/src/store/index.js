//! == Import : npm
import { createStore, compose, applyMiddleware } from 'redux';

//! == Import : local
import rootReducer from '../reducers';
import testMiddleware from '../middlewares/testMiddleware';

//! == Enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    testMiddleware,
  ),
);

//! == Store
const store = createStore(
  rootReducer,
  //? preloadedState,
  enhancers,
);

//! == Export
export default store;