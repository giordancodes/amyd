import React, { Component } from 'react';
import './amyd.css';

class Nav extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <a href="#">AMYD</a>
          </li>
          <li>
            <a href="#">Artist</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Nav;