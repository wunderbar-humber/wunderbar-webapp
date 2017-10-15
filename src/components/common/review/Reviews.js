import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * 
 * This is the Reviews Component, it expects a Review List array
 * 
 * @class Reviews
 * @extends {Component}
 */
class Reviews extends Component {
  constructor(props) {
    super(props);
    this.state = { isLiked: false };
  }

  like(event) {
    this.setState({
      isLiked: !this.state.isLiked
    });
  }

  render() {
    const reviewList = this.props.reviewList;
    return (
      <div className="z-depth-2">
        <ul className="collection">
          {reviewList.map((review, index) => (
            <ReviewItem
              image={review.image}
              name={review.name}
              title={review.title}
              key={index}
              review={review.review}
            />
          ))}
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

/**
 * 
 * This is the Review Item component, it is tightly coupled with Reviews and shouldn't be used individually
 * 
 * @class ReviewItem
 * @extends {Component}
 */
class ReviewItem extends Component {
  constructor(props) {
    super(props);
    this.state = { isLiked: false };
  }

  /**
   * 
   * Fired when the like button is clicked
   * 
   * @param {any} event 
   * @memberof ReviewItem
   */
  like(event) {
    this.setState({
      isLiked: !this.state.isLiked
    });
  }

  render() {
    return (
      <li className="collection-item avatar">
        <img
          src={this.props.image}
          alt={this.props.name}
          height="60px"
          className="circle"
        />
        <span className="title">{this.props.title}</span>
        <p>{this.props.review}</p>
        <a
          className="secondary-content btn-floating btn-large waves-effect waves-light red"
          onClick={this.like.bind(this)}
        >
          <i className="material-icons">
            {this.state.isLiked ? 'favorite' : 'favorite_border'}
          </i>
        </a>
      </li>
    );
  }
}
