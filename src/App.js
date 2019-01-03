import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Go go Irsan</p>
          <a className="App-link" href="https://www.facebook.com/irsan.sebastian.9" target="_blank" rel="noopener noreferrer">
            Irsan tampan
          </a>
        </header>
      </div>
    );
  }
}

export default App;
