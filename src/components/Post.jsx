/**
 * ************************************
 *
 * @module  Post.jsx
 * @author 
 * @date
 * @description Holds posts for a given topic
 *
 * ************************************
 */

import React from 'react';

const Post = props => {
  return (
    <div className="post">
      <p>{props.user} says:</p>
      <p>{props.post}</p>
      <p>Sent at {props.time.slice(11,16)}</p>
    </div>
  );
}

export default Post;