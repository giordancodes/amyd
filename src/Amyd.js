import React, { Component } from 'react';

import Nav from './Nav';
import Footer from './Footer';

import logo from './amyd-logo.png';
import './amyd.css';

class Amyd extends Component {

  constructor() {
    super();
    this.state={
      year: (new Date().getFullYear())
    }
  }

  render() {
    return (
      <div className="full-wrap">

        <header>
          <div className="logo-container">
            <img src={logo} className="logo" alt="logo" />
          </div>
        </header>

        <Nav />

        <div className="content">
          
        </div>

        <Footer year={ this.state.year }/>
        
      </div>
    )
  }
}

export default Amyd;