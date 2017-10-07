import React, { Component } from 'react';
import $ from 'jquery';
import Review from '../common/Review';

/**
 * 
 * 
 * @class ReviewList
 * @extends {Component}
 */
class ReviewList extends Component {
  componentDidMount() {}

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
