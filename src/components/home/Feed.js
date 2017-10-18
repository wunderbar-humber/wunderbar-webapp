import React, { Component } from 'react';
import Card from './../common/Card';
import './Feed.css';
// TODO add prop shape
// import PropTypes from 'prop-types';

/**
 * Home components acts as the main component for the Home Page
 * 
 * @class Home
 * @extends {Component}
 */
class Feed extends Component {
  render() {
    return (
      <div className="col s12 cards-container">
        {this.props.restaurantList.map((restaurant, index) => {
          return (
            <Card
              key={index}
              restaurantName={restaurant.name}
              restaurantImage={restaurant.image}
              restaurantCategory={restaurant.category}
              restaurantAddress={restaurant.address}
              restaurantPhone={restaurant.phone}
              restaurantPrice={restaurant.price}
            />
          );
        })}
      </div>
    );
  }
}

export default Feed;
