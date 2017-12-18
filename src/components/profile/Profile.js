import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import About from './About';
import PastReviews from './PastReviews';
import Bookmarks from './Bookmarks';
import Carousel from '../common/Carousel';
import imgPlaceholder from '../profile/photos/imagePlaceholder.jpg';
import './ProfileDesign.css';

/**
 * This is the main component of the User Profile Page
 * 
 * @class Profile
 * @extends {Component}
 */
class Profile extends Component {
  componentDidMount() {}
  render() {
    const imagePlaceholder = {
      image: imgPlaceholder
    };

    return (
      <Router basename="/profile">
        <div className="Profile">
          <div className="center-align">
            <h1 className="Name">{this.props.name}</h1>
            <Carousel images={[imagePlaceholder]} />
          </div>
          <nav className="container center-align">
            <div>
              <ul className="tabs">
                <li>
                  <Link
                    to="/about"
                    className="waves-effect waves-teal btn-flat center-align"
                  >
                    MyInfo
                  </Link>
                </li>
                <li>
                  <Link
                    to="/bookmarks"
                    className="waves-effect waves-teal btn-flat center-align"
                  >
                    Bookmarks
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pastReviews"
                    className="waves-effect waves-teal btn-flat center-align"
                  >
                    Past Reviews
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <Route path="/about" component={About} />
          <Route path="/bookmarks" component={Bookmarks} />
          <Route path="/pastReviews" component={PastReviews} />
        </div>
      </Router>
    );
  }
}

export default Profile;
