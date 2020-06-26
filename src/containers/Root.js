import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { HashRouter  } from 'react-router-dom';

import LandingPage from '../components/LandingPage';

export default class Root extends Component {
  render() {
    return (
      <HashRouter>
          <LandingPage />
      </HashRouter>
    );
  }
}
