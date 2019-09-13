import React from 'react';
import {
  BrowserRouter as Router, Link, Route, Switch,
} from 'react-router-dom';

import { Home, Pokemon } from './pages';

const App = () => (
  <Router>
    <div>
      <Link to="/">Home</Link>
      <Link to="/pokemon">Pokemon</Link>
    </div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/pokemon" component={Pokemon} />
    </Switch>
  </Router>
);

export default App;
