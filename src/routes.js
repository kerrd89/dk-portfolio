import React from 'react';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';
import App from './containers/App';
import Contact from './containers/Contact';
import Projects from './containers/Projects';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App}>
      <IndexRoute component={Projects} />
      // <Route path="/projects" component={Projects}/>
      <Route path="/contact" component={Contact}/>
    </Route>
  </Router>
);

export default Routes;
