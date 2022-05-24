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

import React, { useState } from 'react';
import Post from './Post';


const Content = props => {

  return (
    <div className="content">
      <h1 className="topic-title">{props.topic}</h1>
      <p className="description">{props.description}</p>
      <Post user="Doggo" post="I like walks" time="12:00:00"/>
      <Post user="Kitty" post="I like naps" time="12:01:00"/>
    </div>
  );
}

export default Content;