import React from 'react';
import "./App.scss";
import { List } from './List';

const appStyle = {
  borderStyle: '2px solid black',
  width: '50em',
  height: '50em'
}

export const App = () => {
  return (
    <div style={appStyle} className="App">
      <h1 className={"font"}>To-do List</h1>
      <List new='true'></List>
    </div>
  );
}

export default App;
