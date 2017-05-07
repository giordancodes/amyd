import React, { Component } from 'react';

import logo from './amyd-logo.png';
import './amyd.css';

class Footer extends Component {
  render() {
    return (
      <footer>
        copyright { this.props.year }
      </footer>
    )
  }
}

export default Footer;