//! == Import : npm
import React from 'react';
import { Route } from 'react-router-dom';

//! == Import : local
import Header from '../../containers/Header';
import Home from '../../containers/Home';
import Command from '../../containers/Command';
import Footer from '../../containers/Footer';
import FindUs from '../findUS'

import './styles.scss';



const App = () => (
  <div className="app">
    <Header />
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/commander">
        <Command />
      </Route>
      <Route exact path="/nous-trouver">
        <FindUs />
      </Route>
    <Footer />
  </div>
);

export default App;
