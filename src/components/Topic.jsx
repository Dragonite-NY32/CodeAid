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

const Topic = props => {
  const classes = `topic ${props.active ? "active" : "inactive"}`;
  return (
    <div className={classes} onClick={props.onClick}>
      <p>{props.name}</p>
    </div>
  );
};

export default Topic;
