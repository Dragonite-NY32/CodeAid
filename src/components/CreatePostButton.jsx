/**
 * ************************************
 *
 * @module  CreatePostButton.jsx
 * @author 
 * @date
 * @description button you can click to create a post
 *
 * ************************************
 */

import React from 'react';
import { useDispatch } from 'react-redux';
import Post from './Post';


const CreatePostButton = props => {

  const handleClick = async () => {

    let authorField = document.getElementById('new-post-author');
    let contentField = document.getElementById('new-post-content');
    let titleField = document.getElementById('new-post-title');

    const author = authorField.value;
    const content = contentField.value;
    const title = titleField.value;
    
    const response = await fetch('/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, content, author, topicId: props.activeTopic.id})
    });

    if (response.status === 200) {
      const { author, content, timestamp } = await response.json();

      props.setPosts([...props.posts, <Post user={author} post={content}/>])
    }
    authorField.value = '';
    contentField.value = '';
    titleField.value = '';

  }
  

  return (
    <button onClick={handleClick}>Create Post</button>
  );
};

export default CreatePostButton;
