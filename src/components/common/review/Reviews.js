import React, { Component } from 'react';
import PropTypes from 'prop-types';
import bodymovin from 'bodymovin';
import heart from './../../../assets/animations/heart.json';

/**
 * 
 * 
 * @class Reviews
 * @extends {Component}
 */
class Reviews extends Component {
  render() {
    const reviewList = this.props.reviewList;
    return (
      <div className="z-depth-2">
        <ul className="collection">
          {reviewList.map((review, index) => {
            return (
              <li className="collection-item avatar">
                <img
                  src={review.image}
                  alt={review.name}
                  height="60px"
                  className="circle"
                />
                <span className="title">{review.title}</span>
                <p>{review.review}</p>
                <a className="secondary-content btn-floating btn-large waves-effect waves-light red">
                  <i class="material-icons">add</i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

Reviews.propTypes = {
  reviewList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.any.isRequired,
      title: PropTypes.string.isRequired,
      review: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Reviews;
