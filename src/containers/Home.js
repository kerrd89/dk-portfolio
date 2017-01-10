import React, { Component } from 'react';


import '../css/Home.css';

const Home = () => {
  return (
    <div className="Home">
      <ul>
        <li><p>Notes App Using Electron, Vue, and sqlite3</p>
          <img alt="" width="80%"/>
          <span>Electron Application using VueJs as the framework, sqlite3 and knexjs for a database, applescript, and text to speech.</span>
        </li>
        <li><p>twitter user analytics</p>
          <img alt="" width="80%"/>
          <span>Calls the twitter API for a given users recent tweets and provides analysis about that activity.  Built using React, React-Router, and an express server.</span>

        </li>
        <li><p>recreated trawn app</p>
          <img alt="" width="80%"/>
          <span>Game built with vanilla javascript 6 months into school at Turing using canvas and animation frames.</span>
        </li>
      </ul>
    </div>
  );
}

export default Home;
