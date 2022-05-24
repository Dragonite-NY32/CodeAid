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
import {Counter} from './features/counter/counter';

import '../public/style.scss';

const App = props => {
  const initialState = [
    {
      name: 'React',
      description: 'The front-end framework we all know and love',
      id: 1
    },
    {
      name: 'Redux',
      description: 'The state-management framework we all know and love',
      id: 2
    },
    {
      name: 'Express',
      description: 'The back-end framework we all know and love',
      id: 3
    },
    {
      name: 'Pets',
      description: 'Animals are friendly for the house',
      id: 4
    }
  ]
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
