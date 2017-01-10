import '../css/reset.css';
import React, { Component } from 'react';
import Nav from '../components/Nav';
import logo from '../assets/logo.svg';
import mountain from '../assets/mountain.svg';
import sun from '../assets/sun.svg';

import '../css/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      mmmHamburger: true
    };
  }
  render() {
    const { mmmHamburger } = this.state;
    return (
      <div className="App">
        <button onClick={()=>this.setState({ mmmHamburger: !this.state.mmmHamburger })}></button>
        <div className={mmmHamburger ? 'App-sidebar' : 'hidden'}>
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
