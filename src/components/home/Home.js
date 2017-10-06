import React, { Component } from 'react';
import Preloader from '../common/CirclePreloader';
import './Home.css';

/**
 * Home components acts as the main component for the Home Page
 * 
 * @class Home
 * @extends {Component}
 */
class Home extends Component {
  render() {
    return (
      <div className="row" id="home-page">
        <div className="col m4 l3 hide-on-small-only" id="side-nav">
          <Preloader className="center-align valign-wrapper" />
        </div>
        <div className="col s12 m8 l9" id="main-content">
          <Preloader className="center-align valign-wrapper" />
        </div>
      </div>
    );
  }
}

export default Home;
