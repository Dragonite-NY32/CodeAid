/**
 * ************************************
 *
 * @module  App.jsx
 * @author 
 * @date
 * @description Main component of the app, holds all other components
 *
 * ************************************
 */

import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNavbar from './components/MyNavbar';
import Sidebar from './components/Sidebar';
import Home from './routes/Home';
import Content from './components/Content';
import Footer from './components/Footer';
import '../public/style.scss';

const App = props => {
  
  return (
    <div className="app">
      <BrowserRouter>
        <MyNavbar />  
        <Sidebar />
        <Routes>
          <Route path='/' element={<Content />} />
          <Route path='/home' element={ <Home /> }/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
