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
        <button onClick={()=>this.setState({ mmmHamburger: !this.state.mmmHamburger })}>

        <svg width="36px" height="24px" viewBox="3 6 18 12" version="1.1" >
            <path d="M3,18 L21,18 L21,16 L3,16 L3,18 L3,18 Z M3,13 L21,13 L21,11 L3,11 L3,13 L3,13 Z M3,6 L3,8 L21,8 L21,6 L3,6 L3,6 Z" id="Shape" stroke="none" fill="#FFFFFF" fillRule="evenodd"></path>
        </svg>

        </button>
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
