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


  // const initialState = [
  //   {
  //     topic: 'React',
  //     description: 'The front-end framework we all know and love',
  //     id: 1
  //   },
  //   {
  //     topic: 'Redux',
  //     description: 'The state-management framework we all know and love',
  //     id: 2
  //   },
  //   {
  //     topic: 'Express',
  //     description: 'The back-end framework we all know and love',
  //     id: 3
  //   },
  //   {
  //     topic: 'Pets',
  //     description: 'Animals are friendly for the house',
  //     id: 4
  //   }
  // ]
  const [topicList, setTopicList] = useState(['React', 'Redux', 'Express', 'Pets']);
  const [activeTopic, setActiveTopic] = useState('Pets');

  const highlightTopic = (e) => {
    setActiveTopic(e.target.innerText);
  };

  return (
    <div className="app">
      <MyNavbar />
      <Sidebar topicList={topicList} highlightTopic={highlightTopic} activeTopic={activeTopic}/>
      <Content topic={activeTopic} description="Animals are friendly for the house"/>
      <Footer />
    </div>
  );
};

export default App;
