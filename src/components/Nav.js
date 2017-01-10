import '../css/reset.css';
import React, { Component } from 'react';
import { Link } from 'react-router';

import '../css/Nav.css';

class Nav extends Component {
  render() {
    return (
      <nav className="Nav">
        <ul>
          <Link to="/"><li>home</li></Link>
          <Link to="/projects" activeClassName="active"><li>projects</li></Link>
          <Link to="/contact" activeClassName="active"><li>contact</li></Link>
        </ul>
      </nav>

    );
  }
}

export default Nav;
