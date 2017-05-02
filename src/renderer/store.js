import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducers from './reducers';
import DevTools from './containers/dev-tools';

export default function configureStore(history, initialState = {}) {
  const reduxLoggerMiddleware = createLogger();
  const reduxRouterMiddleware = routerMiddleware(history);

  const finalCreateStore = compose(
    applyMiddleware(thunk),
    applyMiddleware(reduxRouterMiddleware),
    applyMiddleware(reduxLoggerMiddleware),
    DevTools.instrument(),
  )(createStore);

  const store = finalCreateStore(combineReducers({
    routing: routerReducer,
    ...reducers,
  }), initialState);


  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers').default; // eslint-disable-line global-require
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
