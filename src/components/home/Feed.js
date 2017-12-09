import React, { Component } from 'react';
import Card from './../common/card/Card';
import './Feed.css';
import PropTypes from 'prop-types';

/**
 * The feed component renders all the restaurant cards
 * 
 * @class Feed
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
              id={restaurant.id}
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

Feed.propTypes = {
  restaurantList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.any.isRequired,
      category: PropTypes.string,
      address: PropTypes.string,
      phone: PropTypes.string,
      price: PropTypes.string
    })
  )
};

export default Feed;
