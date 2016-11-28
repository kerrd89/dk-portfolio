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
          <Link to="/"><li>HOME</li></Link>
          <Link to="/projects" activeClassName="active"><li>PROJECTS</li></Link>
          <Link to="/contact" activeClassName="active"><li>CONTACT</li></Link>
        </ul>
      </nav>

    );
  }
}

export default Nav;
