import '../css/reset.css';
import React, { Component } from 'react';
import Nav from '../components/Nav';
import logo from '../assets/logo.svg';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-sidebar">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>David Kerr</h2>
          <Nav />
        </div>
        {this.props.children}
      </div>

    );
  }
}

export default App;
