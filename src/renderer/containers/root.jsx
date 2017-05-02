import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { applyRouterMiddleware, Router } from 'react-router';
import { useScroll } from 'react-router-scroll';
import { MuiThemeProvider } from 'material-ui';
import routes from '../routes';

export default class Root extends Component {
  /* eslint-disable react/forbid-prop-types */
  static propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };
  /* eslint-enable react/forbid-prop-types */
  render() {
    const { store, history } = this.props;

    const render = applyRouterMiddleware(useScroll());

    // @see https://github.com/ReactTraining/react-router/issues/2704#issuecomment-261310093
    if (!this.routes) {
      this.routes = routes;
    }

    const component = (
      <div>
        <Router
          render={render}
          history={history}
          routes={this.routes}
        />
      </div>
    );

    return (
      <Provider store={store} key="provider">
        <MuiThemeProvider>
          {component}
        </MuiThemeProvider>
      </Provider>
    );
  }
}
