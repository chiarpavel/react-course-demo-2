import React from 'react';
import './App.css';

import Header from './Header';
import Content from './Content';
import ClockFunction from './ClockFunction';
import ClockClass from './ClockClass';
import Parent from './Parent';

function App() {
  return (
    <div className="App">
      <Header title="demo" />

      <Content>
        <ClockClass />
        <ClockFunction />
        <Parent />
      </Content>
    </div>
  );
}

export default App;
