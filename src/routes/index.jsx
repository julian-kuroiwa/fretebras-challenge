import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Restaurants from '../pages/Restaurants';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/city+" component={Restaurants} />
  </Switch>
);

export default Routes;
