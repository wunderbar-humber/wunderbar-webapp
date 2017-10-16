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
      <main>
        <div className="row" id="home-page">
          <div className="col m4 l3 hide-on-small-only" id="side-nav">
            <ul>
              <li>
                <a className="waves-effect waves-teal btn-flat">Restaurants</a>
              </li>
              <li>
                <a className="waves-effect waves-teal btn-flat">Cafes</a>
              </li>
              <li>
                <a className="waves-effect waves-teal btn-flat">
                  Pubs &amp; Bars
                </a>
              </li>
              <div className="divider" />
              <li>
                <a className="waves-effect waves-teal btn-flat">Settings</a>
              </li>
            </ul>
          </div>
          <div className="col s12 m8 l9" id="main-content">
            <Preloader className="center-align valign-wrapper" />
          </div>
        </div>
      </main>
    );
  }
}

export default Home;
