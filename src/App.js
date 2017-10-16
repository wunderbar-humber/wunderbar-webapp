import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './components/common/Footer';
import Home from './components/home/Home';
import Profile from './components/profile/Profile';
import Restaurant from './components/restaurant/Restaurant';
import Navbar from './components/common/Navbar';

/**
 * This component is the root/main component of this React application
 * 
 * @class App
 * @extends {Component}
 */
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
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
