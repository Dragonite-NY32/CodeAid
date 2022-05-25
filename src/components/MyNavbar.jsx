/**
 * ************************************
 *
 * @module  Example.jsx
 * @author 
 * @date
 * @description Just a test to get my bearings with React again
 *
 * ************************************
 */

import React from 'react';
import { Link } from 'react-router-dom';


const MyNavbar = props => {
  return (
    <div className="navbar">
      <Link to ="/home">
        <h1>CodeAid</h1>
      </Link>
  </div>
  )
}

export default MyNavbar;