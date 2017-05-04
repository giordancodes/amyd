import React, { Component } from 'react';
import logo from './amyd-logo.png';
import './amyd.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default App;