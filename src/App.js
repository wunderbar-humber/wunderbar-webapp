import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Footer from './components/common/Footer';
import Home from './components/home/Home';
import Profile from './components/profile/Profile';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* temporary navbar */}
          <nav>
            <div className="nav-wrapper container">
              <Link to="/" className="brand-logo">
                Logo
              </Link>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
              </ul>
            </div>
          </nav>

          {/* Application body */}
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />

          {/* footer */}
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
