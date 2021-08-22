import ReactDOM from 'react-dom';
import React from 'react';
import './style.css';
import App from './components/app/app';
import { Provider } from 'react-redux';
import {store} from './redux/store';

const root = document.querySelector('#root');


ReactDOM.render(
 <Provider store={store}>
       <App/>
 </Provider>,
  root);