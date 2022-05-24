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
import { useDispatch, } from 'react-redux';
import topicReducer from '../reducers/topicSlice';
import {activate} from '../reducers/topicSlice';


const Topic = props => {

  const dispatch = useDispatch();

  const classes = `topic ${props.active ? "active" : "inactive"}`;

  return (
    <div className={classes} onClick={(e) => {
      dispatch(activate(e.target.innerText));
    }
    }>
      <p>{props.name}</p>
    </div>
  );
};

export default Topic;
