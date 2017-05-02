import React from 'react';
import { Route } from 'react-router';
import App from './containers/app';
import Main from './containers/main';

/* eslint-disable react/jsx-filename-extension */
export default (
  <Route path="/" component={App}>
    <Route path="*" component={Main} />
  </Route>
);
/* eslint-enable react/jsx-filename-extension */
