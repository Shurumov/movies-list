import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import 'styles/index.scss'
import 'antd/dist/antd.css';
import App from './App';

import {store} from 'store';
import {init} from 'utils/api';
import config from 'config';

const {API_DOMAIN, API_KEY} = config;

let API_URL = `${API_DOMAIN}`;

init({store, API_URL, API_KEY});

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root'));
