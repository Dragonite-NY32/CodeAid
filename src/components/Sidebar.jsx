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
import Topic from './Topic';

const Sidebar = props => {

  const topics = [];
  for (const topic of props.topicList) {
    if (topic.name === props.activeTopic.name) topics.push(<Topic name={topic.name} active={true} onClick={props.highlightTopic}/>);
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
