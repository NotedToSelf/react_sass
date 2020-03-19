import React from 'react';
import './App.css';
import { List } from './List'

export const App = () => {
  return (
    <div className="App">
      <h1>To-do List</h1>
      <List></List>
    </div>
  );
}

export default App;
