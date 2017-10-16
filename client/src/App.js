import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <br />
        <div className="App-header">
          <h2>React to NYT Search!</h2>
        </div>
      </div>
    );
  }
} 

export default App;
