import 'babel-polyfill';

import 'ts-helpers';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

const { Provider } = require('react-redux');
const { Router, browserHistory } = require('react-router');
const { syncHistoryWithStore } = require('react-router-redux');

import routes from './store/routes';
import configureStore from './store/configure-store';

import './styles/index.css';

declare const __TEST__: boolean;

const store = configureStore({});
const history = syncHistoryWithStore(browserHistory, store);

if (!__TEST__) {
  ReactDOM.render(
    <div>
      <Provider store={ store }>
        <Router history={ history }>
          { routes }
        </Router>
      </Provider>
    </div>,
    document.getElementById('root')
  );
}
