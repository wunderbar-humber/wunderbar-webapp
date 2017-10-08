import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './About';
import PastReviews from './PastReviews';
import PastOrders from './PastOrders';
import Board from './Board';

/**
 * This is the main component of the User Profile Page
 * 
 * @class Profile
 * @extends {Component}
 */
class Profile extends Component {
  render() {
    return (
      <Router>
        <nav>
          <div class="nav-wrapper">
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li>
                <a href="/profile/About">Profile</a>
              </li>
              <li>
                <a href="/profile/Board">Boards</a>
              </li>
              <li>
                <a href="/profile/PastOrders">Past Orders</a>
              </li>
              <li>
                <a href="/profile/PastReviews">Past Reviews</a>
              </li>
            </ul>
            <Route path="/About" component={About} />
            <Route path="/Board" component={Board} />
            <Route path="/PastOrders" component={PastOrders} />
            <Route path="/PastReviews" component={PastReviews} />
          </div>
        </nav>
      </Router>
    );
  }
}

export default Profile;
