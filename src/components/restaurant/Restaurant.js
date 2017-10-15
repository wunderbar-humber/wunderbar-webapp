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
  componentDidMount() {}
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
    this.name = 'Ramen Isshin';
    this.desc =
      'Popular destination specializing in Japanese ramen noodle soup, with vegetarian options available.';
    this.address = '421 College St, Toronto, ON M5T 1T1';
    this.hours = '11:30AM–10PM';
    this.web = 'doordash.com';
    this.phone = '(416) 367-4013';
    this.numberOfReviews = '1';

    this.center = [59.938043, 30.337157];
    this.zoom = 9;

    return (
      <div>
        <div className="container">
          <Carousel images={[mainImage, secondImage]} />

          <div className="row">
            <div className="col s6">
              <Description
                name={this.name}
                desc={this.desc}
                address={this.address}
                hours={this.hours}
                web={this.web}
                phone={this.phone}
                numberOfReviews={this.numberOfReviews}
              />
            </div>
            <div className="col s6">
              <SmallMap center={this.center} zoom={this.zoom} />
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
