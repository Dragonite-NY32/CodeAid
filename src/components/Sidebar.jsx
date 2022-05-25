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

import React from 'react';
import { useSelector } from 'react-redux';
import Topic from './Topic';

const Sidebar = props => {
  // get topic list from redux toolkit store
  const topicList = useSelector((state) => {
    return state.topics;
  });

  const topics = [];
  for (const topic of topicList) {
    topics.push(<Topic topic={topic} />);
  }
  
  return (
    <div className="sidebar">
      <h2>Topics</h2>
      <div className="home-section">
        {/* <Topic name="Home" active={false} /> */}
      </div>
      {topics}
    </div>
  );
};

export default Sidebar;
