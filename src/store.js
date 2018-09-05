import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './store/reducers/rootReduxer';

export default function configureStore() {
  return createStore(
    rootReducer,
    composeWithDevTools(
    applyMiddleware(thunk)
  ));
}
