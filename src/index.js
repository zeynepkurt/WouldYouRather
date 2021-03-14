import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Reducers from './Reducers';
import Middleware from './middleware';
import 'react-sweet-progress/lib/style.css';

const store = createStore(Reducers, Middleware);

ReactDOM.render(
  <Provider store={store} >
  	<App />
  </Provider>,
  document.getElementById('root')
);