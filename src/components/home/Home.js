import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Card from './../common/Card';
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
            <Card
              restaurantName="Isshin"
              restaurantImage="https://static.wixstatic.com/media/ca289c_6f22b05392fd43b0a71a30f8ec041607~mv2.png_256"
              restaurantCategory="Oriental"
              restaurantAddress="College Street 232, Toronto, ON"
              restaurantPhone="(111)-111-1111"
              restaurantPrice="$$"
            />
          </div>
        </div>
      </main>
    );
  }
}

export default Home;
