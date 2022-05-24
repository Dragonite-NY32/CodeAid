/**
 * ************************************
 *
 * @module  Sidebar.jsx
 * @author 
 * @date
 * @description Holds the list of topics on the left side of the string
 *
 * ************************************
 */

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Topic from './Topic';

const Sidebar = props => {
  // get topic list from redux toolkit store
  const topicList = useSelector((state) => {
    return state.topics;
  });

  const topics = [];
  for (const topic of topicList) {
    if (topic.active) topics.push(<Topic name={topic.name} active={true} onClick={props.highlightTopic}/>);
    else topics.push(<Topic name={topic.name} active={false} onClick={props.highlightTopic}/>);
  }
  
  return (
    <div className="sidebar">
      <div className="home-section">
        <Topic name="Home" active={false} />
      </div>
      {topics}
    </div>
  );
};

export default Sidebar;
