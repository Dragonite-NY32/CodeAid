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
import { useSelector } from 'react-redux';
import Post from './Post';


const Content = props => {

  // get the currently active topic from the redux toolkit store
  const activeTopic = useSelector((state) => state.topics.find(element => element.active === true));

  return (
    <div className="content">
      <h1 className="topic-title">{activeTopic.name}</h1>
      <p className="description">{activeTopic.description}</p>
      <Post user="Doggo" post="I like walks" time="12:00:00"/>
      <Post user="Kitty" post="I like naps" time="12:01:00"/>
    </div>
  );
}

export default Content;