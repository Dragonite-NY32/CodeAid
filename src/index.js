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
import ReactDOM from "react-dom";
import { render } from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

const container = document.getElementById('contents');
const root = createRoot(container); 
root.render(<App />);
