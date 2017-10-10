import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import About from './About';
import PastReviews from './PastReviews';
import PastOrders from './PastOrders';
import Board from './Board';
import './ProfileDesign.css';

/**
 * This is the main component of the User Profile Page
 * 
 * @class Profile
 * @extends {Component}
 */
class Profile extends Component {
  render() {
    return (
      <Router basename="/profile">
        <div>
          <nav>
            <div className="nav-wrapper">
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                  <div class="col s12 m8 offset-m2 l6 offset-l3">
                    <div class="card-panel grey lighten-5 z-depth-1">
                      <div className="row valign-wrapper">
                        <div className="col s2">
                          <img
                            src=""
                            alt=""
                            className="circle responsive-img"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <Link to="/about">Profile</Link>
                </li>
                <li>
                  <Link to="/board">Boards</Link>
                </li>
                <li>
                  <Link to="/pastOrders">Past Orders</Link>
                </li>
                <li>
                  <Link to="/pastReviews">Past Reviews</Link>
                </li>
              </ul>
            </div>
          </nav>
          <Route path="/about" component={About} />
          <Route path="/board" component={Board} />
          <Route path="/pastOrders" component={PastOrders} />
          <Route path="/pastReviews" component={PastReviews} />
        </div>
      </Router>
    );
  }
}

export default Profile;
