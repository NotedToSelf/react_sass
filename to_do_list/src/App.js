import React from 'react';
import './App.css';
import { List } from './List'

const titleStyle = {
  paddingBottom: '2em'
}

const appStyle = {
  borderStyle: '2px solid black',
  width: '50em',
  height: '50em'
}

export const App = () => {
  return (
    <div style={appStyle} className="App">
      <h1 style={titleStyle}>To-do List</h1>
      <List new='true'></List>
    </div>
  );
}

export default App;
