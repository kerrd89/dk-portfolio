import React from 'react';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';
import App from './App';
// import ExtendedForecast from './containers/ExtendedForecastContainer';
// import PinnedCities from './containers/PinnedCitiesContainer';
import Contact from './Contact';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App}>
      <IndexRoute component={App} />
      <Route path="/projects" component={App} />
      <Route path="/contact" component={Contact} />
    </Route>
  </Router>
);

export default Routes;
