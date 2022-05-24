/**
 * ************************************
 *
 * @module  App.jsx
 * @author 
 * @date
 * @description Main component of the app, holds all other components
 *
 * ************************************
 */

import React, {useState} from 'react';
import MyNavbar from './components/MyNavbar';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Footer from './components/Footer';
import { useSelector } from 'react-redux';
import '../public/style.scss';

const App = props => {
  // get topic list from redux toolkit store
  const initialState = useSelector((state) => {
    return state.topics;
  });
  const [topicList, setTopicList] = useState(initialState);
  const [activeTopic, setActiveTopic] = useState(topicList[0]);

  const highlightTopic = (e) => {
    setActiveTopic(topicList.find(element => element.name === e.target.innerText));
  };
  
  return (
    <div className="app">
      <MyNavbar />
      <Sidebar topicList={topicList} highlightTopic={highlightTopic} activeTopic={activeTopic}/>
      <Content topic={activeTopic} />
      <Footer />
    </div>
  );
};

export default App;
