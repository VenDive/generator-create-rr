import { applyMiddleware, createStore } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

// eslint-disable-next-line
const devToolsExt = window.__REDUX_DEVTOOLS_EXTENSION__;
const reduxDevToolsEnabled = devToolsExt && devToolsExt();
const middlewares = [thunk];

export function createStoreInstance(
  _reduxDevToolsEnabled = reduxDevToolsEnabled,
  _middlewares = middlewares,
) {
  if (_reduxDevToolsEnabled) {
    const composeEnhancers = composeWithDevTools({
      name: '<%= title %>',
      realtime: true,
      trace: true,
      traceLimit: 25,
    });
    return createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));
  }

  return createStore(rootReducer, applyMiddleware(..._middlewares));
}

const store = createStoreInstance();
export default store;
