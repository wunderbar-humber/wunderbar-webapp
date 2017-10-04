import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Footer from './components/common/Footer';
import Home from './components/home/Home';
import Profile from './components/profile/Profile';
import Restaurant from './components/restaurant/Restaurant';
import logo from './logo.svg';
import Navbar from './components/common/Navbar';
import NavbarNew from './components/common/NavbarNew';

/**
 * This component is the root/main component of this React application
 * 
 * @class App
 * @extends {Component}
 */
class App extends Component {
  render() {
    return (
<<<<<<< HEAD
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
                <li>
                  <Link to="/restaurant">Restaurant</Link>
                </li>
              </ul>
            </div>
          </nav>

          {/* Application body */}
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/restaurant" component={Restaurant} />

          {/* footer */}
          <Footer />
=======
      <div className="App">
        {/* <Navbar
          profileName="Mohit"
          profileImage="http://materializecss.com/images/yuna.jpg"
        /> */}
        <NavbarNew
          profileName="Nikita"
          profileImage="http://materializecss.com/images/yuna.jpg"
        />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
>>>>>>> sort of fixed navbar
        </div>
      </Router>
    );
  }
}

export default App;
