import React, { Component } from 'react';
import logo from './amyd-logo.png';
import './amyd.css';

class App extends Component {
  render() {
    return (
      <div className="full-wrap">
        <header>
          <div className="logo-container">
            <img src={logo} className="logo" alt="logo" />
          </div>
        </header>
        <nav>
          <ul>
            <li><a href="#">AMYD</a></li>
            <li><a href="#">Artist</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default App;