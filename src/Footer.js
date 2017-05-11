import React, { Component } from 'react';

import logo from './amyd-logo.png';
import './amyd.css';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="copyright">
          &copy; { this.props.year } AMYD Sound
        </div>
        <div className="social">
          <a href="#">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fa fa-youtube-play"></i>
          </a>
          <a href="#">
            <i className="fa fa-soundcloud"></i>
          </a>
          <a href="#">
            <i className="fa fa-bandcamp"></i>
          </a>

        </div>
      </footer>
    )
  }
}

export default Footer;