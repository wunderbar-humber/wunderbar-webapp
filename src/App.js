import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './components/common/Footer';
import Home from './components/home/Home';
import Profile from './components/profile/Profile';
import Restaurant from './components/restaurant/Restaurant';
import Navbar from './components/common/Navbar';
import Card from './components/common/Card';

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
          {/* <NavbarNew
            profileName="Nikita"
            profileImage="http://materializecss.com/images/yuna.jpg"
          /> */}
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/restaurant" component={Restaurant} />

          <Card
            restaurantName="Isshin"
            restaurantImage="https://static.wixstatic.com/media/ca289c_6f22b05392fd43b0a71a30f8ec041607~mv2.png_256"
            restaurantCategory="Oriental"
            restaurantAddress="College Street 232, Toronto, ON"
            restaurantPhone="(111)-111-1111"
            restaurantPrice="$$"
          />

          {/* footer */}
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
