import React, { Component } from 'react';
import './Card.css';

/**
 * The Card component renders a materialize-css card with the supplied props
 * 
 * @class Card
 * @extends {Component}
 */
class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-image">
          <img src={this.props.restaurantImage} alt="restaurant" />
          <a
            id="smth"
            className="btn-floating halfway-fab waves-effect waves-light blue"
          >
            <i className="material-icons">bookmark</i>
          </a>
        </div>
        <div className="card-content">
          <span className="card-title">{this.props.restaurantName}</span>
          <p>
            Category: {this.props.restaurantCategory} || Price:{' '}
            {this.props.restaurantPrice} || Crowd:
          </p>
          <p>Address: {this.props.restaurantAddress}</p>
          <p>Phone: {this.props.restaurantPhone}</p>
        </div>
        <div className="card-action">
          <a className="green-text">
            <i className="material-icons">done</i>Like
          </a>
          <a className="red-text right">
            <i className="material-icons">clear</i>Dislike
          </a>
        </div>
      </div>
    );
  }
}
export default Card;
