/**
 * ************************************
 *
 * @module  Example.jsx
 * @author 
 * @date
 * @description Just a test to get my bearings with React again
 *
 * ************************************
 */

import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import Post from './Post';
import CreatePostDialogue from './CreatePostDialogue';



const Content = props => {

  // get the currently active topic from the redux toolkit store!
  const activeTopic = useSelector((state) => state.topics.find(element => element.active === true));

  // if no active topic, render empty div
  if (!activeTopic) {
    return (<div className="content"></div>);
  }

  const [posts, setPosts] = useState([]);

  // fetch posts
  useEffect(() => {
    fetch(`/api/posts/${activeTopic.id}`)
      .then(data => data.json())
      .then(postData => {
        setPosts(postData.map(post => <Post user={post.author} post={post.content} time={post.timestamp} />));
      });
  }, [activeTopic]);

  return (
    <div className="content">
      <h1 className="topic-title">{activeTopic.name}</h1>
      <p className="description">{activeTopic.description}</p>
      {posts}
      <CreatePostDialogue activeTopic={activeTopic} posts={posts} setPosts={setPosts}/>
    </div>
  );
}

export default Content;