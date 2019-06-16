import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Routes from './routes';
import 'bootstrap/dist/css/bootstrap.css';
import './css/index.scss';
import * as serviceWorker from './serviceWorker';
import reducers from './store/reducers';

const store = createStore(reducers);

const app = (
  <Provider store={store}>
    <Routes />
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
serviceWorker.unregister();
