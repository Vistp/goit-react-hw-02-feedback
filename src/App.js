// import React, { Component } from 'react';

import React from 'react';
import FriendList from './components/FriendList';
import friends from './components/friends.json';

import './App.css';
import Feedback from './components/Feedback';

function App() {
  return (
    <div>
      <Feedback />
      <FriendList friends={friends} />
      </div>
  );
}

export default App;
