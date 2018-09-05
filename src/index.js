/* eslint-disable no-unused-vars */
// /* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import {Router, browserHistory } from 'react-router';
import routes from './routes';
import injectTapEventPlugin from 'react-tap-event-plugin';
require('./favicon.ico');
import './styles.scss';
import { Provider } from 'react-redux';
import 'font-awesome/css/font-awesome.css';
import 'flexboxgrid/css/flexboxgrid.css';

// Import Axios network call config
import { axiosClient } from './utils/axioxConfig';
import configureStore from './store';

injectTapEventPlugin();
render(
  <Provider store={configureStore()}>
    <Router routes={routes} history={browserHistory} />
  </Provider>,
  document.getElementById('app')
);


