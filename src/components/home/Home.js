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
          <div className="col m3 l2 hide-on-small-only" id="side-nav">
            <ul>
              <li>
                <a className="btn">All</a>
              </li>
              <li>
                <a className="btn">Restaurants</a>
              </li>
              <li>
                <a className="btn active">Cafes</a>
              </li>
              <li>
                <a className="btn">Pubs &amp; Bars</a>
              </li>
              <div className="divider" />
              <li>
                <a className="btn">Settings</a>
              </li>
            </ul>
          </div>
          <div className="col s12 m9 l10" id="main-content">
            <div className="row" id="tag-area">
              <div className="chip">
                All
                <i className="close material-icons">close</i>
              </div>
              <div className="chip">
                Restaurant
                <i className="close material-icons">close</i>
              </div>
            </div>
            <div className="row">
              <Card
                restaurantName="Isshin"
                restaurantImage="https://static.wixstatic.com/media/ca289c_6f22b05392fd43b0a71a30f8ec041607~mv2.png_256"
                restaurantCategory="Oriental"
                restaurantAddress="College Street 232, Toronto, ON"
                restaurantPhone="(111)-111-1111"
                restaurantPrice="$$"
              />
              <Card
                restaurantName="Isshin"
                restaurantImage="https://static.wixstatic.com/media/ca289c_6f22b05392fd43b0a71a30f8ec041607~mv2.png_256"
                restaurantCategory="Oriental"
                restaurantAddress="College Street 232, Toronto, ON"
                restaurantPhone="(111)-111-1111"
                restaurantPrice="$$"
              />
              <Card
                restaurantName="Isshin"
                restaurantImage="https://static.wixstatic.com/media/ca289c_6f22b05392fd43b0a71a30f8ec041607~mv2.png_256"
                restaurantCategory="Oriental"
                restaurantAddress="College Street 232, Toronto, ON"
                restaurantPhone="(111)-111-1111"
                restaurantPrice="$$"
              />
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
        </div>
      </main>
    );
  }
}

export default Home;
