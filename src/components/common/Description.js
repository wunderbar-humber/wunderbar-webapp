import React, { Component } from 'react';

/**
 * 
 * 
 * @class Description
 * @extends {Component}
 */
class Description extends Component {
  render() {
    return (
      <div>
        <h3 className="restaurantName">
          {this.props.name}
          <a href="">
            <span className="new badge" data-badge-caption="reviews">
              {this.props.numberOfReviews}{' '}
            </span>
          </a>
        </h3>

        <p className="restaurantDescription">{this.props.desc}</p>
        <p> Address: {this.props.address}</p>
        <p> Hours: {this.props.hours}</p>
        <p> Web: {this.props.web}</p>
        <p> Phone: {this.props.phone}</p>
      </div>
    );
  }
}

export default Description;
