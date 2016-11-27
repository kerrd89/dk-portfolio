import '../css/reset.css';
import React, { Component } from 'react';
import { Link } from 'react-router';
import logo from '../assets/logo.svg';
import '../css/Nav.css';

class Nav extends Component {
  render() {
    return (
      <nav className="Nav">
        <ul>
          <Link to="/"><li>Home</li></Link>
          <Link to="/projects" activeClassName="active"><li>Projects</li></Link>
          <Link to="/contact" activeClassName="active"><li>Contact</li></Link>
        </ul>
      </nav>

    );
  }
}

export default Nav;
