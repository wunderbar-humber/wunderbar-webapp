import React, { Component } from 'react';
import mainImage from './images/1.jpg';
import secondImage from './images/3.jpg';
import Carousel from '../common/Carousel';
import Description from '../common/Description';
import SmallMap from '../common/SmallMap';
import Reviews from '../common/review/Reviews';

/**
 * This is the view which show all the details of the restaurant.
 * You navigate to this by clicking on an restaurant in the feed
 * 
 * @class Restaurant
 * @extends {Component}
 */
class Restaurant extends Component {
  render() {
    const reviewList = [
      {
        image: mainImage,
        name: 'Maxim',
        title: 'My First Review',
        review:
          'This restaurant is great, I love it so much that i wet my Pants for it'
      },
      {
        image: secondImage,
        name: 'Anton',
        title: 'My Other Review',
        review: 'Damoi, cyka cyka blyat'
      }
    ];

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
          <Reviews reviewList={reviewList} />
        </div>
      </div>
    );
  }
}

export default Restaurant;
