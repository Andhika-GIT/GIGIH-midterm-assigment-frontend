import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// pages
import { Home, VideoDetail } from '../pages';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/video/:id" component={VideoDetail} />
      </Switch>
    </Router>
  );
};

export default Routes;
