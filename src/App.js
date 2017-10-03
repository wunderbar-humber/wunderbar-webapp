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
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>

          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
