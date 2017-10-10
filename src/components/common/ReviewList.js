import React, { Component } from 'react';
import Review from '../common/Review';

/**
 * 
 * 
 * @class ReviewList
 * @extends {Component}
 */
class ReviewList extends Component {
  render() {
    return (
      <div>
        <ul className="collection">
          <Review />
        </ul>
      </div>
    );
  }
}

export default ReviewList;
