import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Search';
import Search from './components/Main';
import Saved from './components/Saved';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <br />
        <div className="App-header">
          <h2>React to NYT Search!</h2>
        </div>
        <Main />
        <br />
        <Saved />
        <br />
        <Search />
      </div>
    );
  }
} 

export default App;
