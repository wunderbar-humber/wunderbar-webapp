import React, { Component } from 'react';
import mainImage from './images/1.jpg';
import secondImage from './images/3.jpg';
import Carousel from '../common/Carousel';
import Description from '../common/Description';
import SmallMap from '../common/SmallMap';
import ReviewList from '../common/ReviewList';

/**
 * This is the view which show all the details of the restaurant.
 * You navigate to this by clicking on an restaurant in the feed
 * 
 * @class Restaurant
 * @extends {Component}
 */
class Restaurant extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <Carousel images={[mainImage, secondImage]} />

          <div className="row">
            <div className="col s8">
              <Description />
            </div>
            <div className="col s4">
              <SmallMap />
            </div>
          </div>
        </div>

        <div className="container">
          {/* comment-review text area*/}
          <div className="input-field col s12">
            <textarea
              id="textarea1"
              className="materialize-textarea"
              defaultValue={''}
            />
            <label htmlFor="textarea1">Comment on this</label>
          </div>
        </div>

        <div className="container">
          <ReviewList />
        </div>
      </div>
    );
  }
}

export default Restaurant;
