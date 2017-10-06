import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Footer from './components/common/Footer';
import Home from './components/home/Home';
import Profile from './components/profile/Profile';
import Restaurant from './components/restaurant/Restaurant';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          
          <nav>
            <div class="nav-wrapper">
              <a href="#" class="brand-logo center">Logo</a>
              <ul id="nav-mobile" class="left hide-on-med-and-down">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/restaurant">Restaurant</Link></li>
              </ul>
            </div>
          </nav>

          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/restaurant" component={Restaurant} />

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
