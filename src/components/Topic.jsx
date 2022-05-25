/**
 * ************************************
 *
 * @module  Topic.jsx
 * @author 
 * @date
 * @description A topic listed in the sidebar
 *
 * ************************************
 */

import React from 'react';
import { useDispatch } from 'react-redux';
import {activate} from '../reducers/topicSlice';


const Topic = props => {

const dispatch = useDispatch();

  // => 'topic active' or 'topic inactive'. 'active' class has special CSS.
  const classes = `topic ${props.topic.active ? "active" : "inactive"}`;

  return (
    <div className={classes} onClick={(e) => {
      dispatch(activate(e.target.innerText));
    }
    }>
      <p>{props.topic.name}</p>
    </div>
  );
};

export default Topic;
