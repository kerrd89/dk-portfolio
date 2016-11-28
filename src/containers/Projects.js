import React, { Component } from 'react';
import '../css/Projects.css';
import TwitterApp from "../assets/twitterUserAnalytics.gif";
import TrawnApp from "../assets/trawn.gif";

class Projects extends Component {
  render() {
    return (
      <div className="Projects">
        <ul>
          <li><p>Twitter User Analytics</p>
            <img src={TwitterApp} alt="animated gif of Twitter application" width="100%"/>
            <span>Calls the twitter API for a given users recent tweets and provides analysis about that activity.  Built using React, React-Router, and an express server.</span>
          </li>
          <li><p>Prawn themed version of Tron</p>
            <img src={TrawnApp} alt="animated gif of Trawn application" width="100%"/>
            <span>Game built with vanilla javascript 6 months into school at Turing using canvas and animation frames.</span>

          </li>
        </ul>
      </div>
    );
  }
}

export default Projects;
