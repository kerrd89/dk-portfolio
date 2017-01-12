import React, { Component } from 'react';
import '../css/Contact.css';

import GithubSvg from '../components/GithubSvg';
import MediumSvg from '../components/MediumSvg';
import TwitterSvg from '../components/TwitterSvg';
import GmailSvg from '../components/GmailSvg';

const Contact = () => {
  return (
    <div className="Contact">
      <ul>
        <li><GithubSvg link="https://github.com/kerrd89"/><a href="https://github.com/kerrd89">Github Profile</a></li>
        <li><TwitterSvg link="https://twitter.com/dkerrious"/><a href="https://twitter.com/dkerrious">Twitter Profile</a></li>
        <li><MediumSvg link="https://medium.com/@dkerrious"/><a href="https://medium.com/@dkerrious">Medium Blog</a></li>
        <li><GmailSvg link="mailto:someone@example.com"/><a href="mailto:someone@example.com">kerrd89@gmail.com</a></li>
      </ul>
    </div>
  );
}

export default Contact;
