/**
 * ************************************
 *
 * @module  CreatePostDialogue.jsx
 * @author 
 * @date
 * @description Form to create new post
 *
 * ************************************
 */

import React from 'react';
import { useDispatch } from 'react-redux';
import CreatePostButton from './CreatePostButton';


const CreatePostDialogue = props => {

  return (
    <div className="createPostDialogue">
      <label for="author">Your Name</label>
      <input id="new-post-author" name="author" type="text" />
      <label for="author">Subject:</label>
      <input id="new-post-title" name="title" type="text" />
      <label for="author">What do you have to say?</label>
      <input id="new-post-content" name="content" type="text" />
      <CreatePostButton activeTopic={props.activeTopic} posts={props.posts} setPosts={props.setPosts}/>
    </div>
  );
};

export default CreatePostDialogue;
