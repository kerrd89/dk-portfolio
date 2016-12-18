import '../css/reset.css';
import React, { Component } from 'react';
import Nav from '../components/Nav';
import logo from '../assets/logo.svg';
import mountain from '../assets/mountain.svg';
import sun from '../assets/sun.svg';

import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-sidebar">
          <h2>david kerr</h2>
          <img src={sun} className="App-logo" alt="logo" />
          <img src={mountain} className="App-logo-mountain" alt="logo-mountain" width={window.width} height={window.height}/>
          <Nav />
        </div>
        {this.props.children}
      </div>

    );
  }
}

export default App;
