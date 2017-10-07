import React, { Component } from 'react';
import $ from 'jquery';

/**
 * 
 * 
 * @class Review
 * @extends {Component}
 */
class Review extends Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <li className="collection-item avatar">
          <img src="images/yuna.jpg" alt className="circle" />
          <span className="title">Review</span>
          <br />
          <span className="title">Name</span>
          <p>
            First Line <br />
            Second Line
          </p>
          <a href="#!" className="secondary-content">
            <i className="material-icons">like</i>
          </a>
        </li>
      </div>
    );
  }
}

export default Review;
