/**
 * ************************************
 *
 * @module  App.jsx
 * @author Tim Ruszala
 * @date
 * @description Main component of the app, holds all other components
 *
 * ************************************
 */

import React from 'react';
import MyNavbar from './components/MyNavbar.jsx';
// import Sidebar from './components/Sidebar.jsx';
import Content from './components/Content.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/style.css';

const App = props => {
  return (
    <>
      <MyNavbar></MyNavbar>
      <Content></Content>
    </>
  )
}

export default App;
