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

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadTopics } from '../reducers/topicSlice';
import Topic from './Topic';


const Sidebar = props => {

  const dispatch = useDispatch();
  const [state, setState] = useState();

  useEffect(() => {
    fetch('/api/topics')
      .then(response => response.json())
      .then(topics => {
        console.log(topics);
        dispatch(loadTopics(topics));
        setState(topics);
      });
  }, []);

  // const fetchTopics = async () => {
  //   const response = await fetch('/api/topics')
  //   const topics = await response.json();
  //   setState(topics);
  // }

  console.log('state in sidebar:', state);
  // get topic list from redux toolkit store
  const topicList = useSelector((state) => {
    return state.topics;
  });
  console.log('topicList:', topicList);

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
