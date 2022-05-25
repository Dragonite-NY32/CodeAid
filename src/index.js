/**
 * ************************************
 *
 * @module  index.js
 * @author
 * @date
 * @description entry point for application. Hangs React app off of #contents in index.html
 *
 * ************************************
 */

import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import '../public/style.scss';
import App from './App.jsx';

const container = document.getElementById('contents');
const root = createRoot(container); 
root.render(
    <Provider store={store}>
      <App />
    </Provider>);
  




