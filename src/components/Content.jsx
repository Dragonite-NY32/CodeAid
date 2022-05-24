/**
 * ************************************
 *
 * @module  Example.jsx
 * @author Tim Ruszala
 * @date
 * @description Just a test to get my bearings with React again
 *
 * ************************************
 */

import React, { useState } from 'react';
import Example from './Example.jsx';

const Content = props => {

  return (
    <div className="content">
      <Example number={1}></Example>
      <Example number={2}></Example>
    </div>
  );
}

export default Content;