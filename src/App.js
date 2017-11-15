import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import List from './List';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <List />
      </div>
    );
  }
}

export default App;
