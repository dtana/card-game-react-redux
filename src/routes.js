import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { SelectionMenu } from './components/selectionMenu';
import Game from './containers/game';

const Routes = () => (
  <Router>
    <Route path="/" exact component={SelectionMenu}/>
    <Route path="/game/:players" component={Game}/>
  </Router>
);

export default Routes;
