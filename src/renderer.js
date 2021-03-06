import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { syncHistoryWithStore } from 'react-router-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Root from './renderer/containers/root';
import configureStore from './renderer/store';
import baseHistory from './renderer/history';

// Needed for onTouchTap
// @see http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const store = configureStore(baseHistory);
const history = syncHistoryWithStore(baseHistory, store);

function renderApp(RootComponent) {
  render(
    /* eslint-disable react/jsx-filename-extension */
    <AppContainer>
      <RootComponent store={store} history={history} />
    </AppContainer>,
    /* eslint-enable react/jsx-filename-extension */
    document.querySelector('#app'), // eslint-disable-line no-undef
  );
}

renderApp(Root);
if (module.hot) {
  module.hot.accept('./renderer/containers/root', () => {
    const nextRoot = require('./renderer/containers/root').default; // eslint-disable-line global-require
    renderApp(nextRoot);
  });
}
