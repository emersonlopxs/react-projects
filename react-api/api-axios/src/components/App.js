import React, { Component } from 'react';
import './App.css';
import News from './News/News';

const App = () => {
  return (
    <div className="App">
      <h1 className="App-title">My Feed</h1>
      {/* <button onClick={this.handleChange} style={style}>Brazil</button>
      <button style={style}>France</button> */}
      <News country="France" />
      <News country="Brazil" />
      <News country="United States" />
    </div>
  );
};

export default App;
