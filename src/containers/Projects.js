import React, { Component } from 'react';
import '../css/Projects.css';

import GithubSvg from "../components/GithubSvg";
import MediumSvg from "../components/MediumSvg";
import LinkSvg from "../components/LinkSvg";

import TwitterApp from "../assets/twitterUserAnalytics.gif";
import ElectronApp from "../assets/electron-notes-app.gif";
import TrawnApp from "../assets/trawn.gif";
import TuringFridays from "../assets/turing-fridays.gif";
import ReactNative from "../assets/react-native.gif";

const Projects = () => {
  return (
    <div className="Projects">
      <ul>
        <li><p>Application to manage student led sessions for Turing</p>
          <img src={TuringFridays} alt="animated gif of turing fridays application" width="80%"/>
          <span>Using firebase, application allows admins to approve, edit, assign classrooms, and monitor attendence for Friday spike sessions.</span>
          <GithubSvg link="https://github.com/Jeff-Duke/turing-fridays" />
          <LinkSvg link="https://turing-fridays.firebaseapp.com/" />
          <MediumSvg link="https://hackernoon.com/prototyping-with-firebase-5d987c2169ac#.ld7rn9fif" />
        </li>
        <li><p>Notes App Using Electron, Vue, and sqlite3</p>
          <img src={ElectronApp} alt="animated gif of notes application" width="80%"/>
          <span>Electron Application using VueJs as the framework, sqlite3 and knexjs for a database, applescript, and text to speech.</span>
          <GithubSvg link="https://github.com/kerrd89/electron-project" />
          <MediumSvg link="https://hackernoon.com/vue-vs-react-254a874d74ab#.3hyh7f4ji" />
          <MediumSvg link="https://medium.com/@dkerrious/electron-packager-file-path-issue-24f4bcbfc970#.i4thjs9j4" />
        </li>
        <li><p>twitter user analytics</p>
          <img src={TwitterApp} alt="animated gif of Twitter application" width="80%"/>
          <span>Calls the twitter API for a given users recent tweets and provides analysis about that activity.  Built using React, React-Router, and an express server.</span>

          <GithubSvg link="https://github.com/kerrd89/twitter-user-analytics" />
          <LinkSvg link="https://shrouded-peak-32259.herokuapp.com/#/" />

        </li>
        <li><p>React Native project using the NBA API to chart statistics</p>
          <img src={ReactNative} alt="animated gif of Hoop Dreams application" id="reactNative"/>
          <span>4 day project to learn React Native using OAuth and an express server</span>
          <GithubSvg link="https://github.com/Jeff-Duke/HoopDreams" />
          <MediumSvg link="https://medium.com/@dkerrious/questions-for-the-creators-of-react-native-702770c48e94#.kagidxubp" />
        </li>
        <li><p>recreated trawn app</p>
          <img src={TrawnApp} alt="animated gif of Trawn application" width="80%"/>
          <span>Game built with vanilla javascript 6 months into school at Turing using canvas and animation frames.</span>
          <GithubSvg link="https://github.com/kerrd89/Trawn" />
        </li>
      </ul>
    </div>
  );
}

export default Projects;
