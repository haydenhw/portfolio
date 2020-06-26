import React from 'react';
import { Route, Switch } from 'react-router-dom';

import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';

export default (
    <Switch>
      <Route exact path="/" component={About}/>
      <Route exact path="/project" component={Projects}/>
      <Route exact path="/contact" component={Contact}/>
    </Switch>
);
