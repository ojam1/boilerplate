import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';


export default () => {
  const store = createStore(
    combineReducers({
    }),
    applyMiddleware(thunk)
  );

  return store;
};
