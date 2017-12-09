import React, { Component } from 'react';
import mainImage from './images/1.jpg';
import secondImage from './images/3.jpg';
import Carousel from '../common/Carousel';
import Description from '../common/Description';
import SmallMap from '../common/SmallMap';
import Reviews from '../common/review/Reviews';
import './restaurant.css';

/**
 * This is the view which show all the details of the restaurant.
 * You navigate to this by clicking on an restaurant in the feed
 * 
 * @class Restaurant
 * @extends {Component}
 */
class Restaurant extends Component {
  constructor(match) {
    super();
    console.log(match);
  }

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
    this.web = 'www.doordash.com';
    this.phone = '(416) 367-4013';
    this.numberOfReviews = '2';

    this.center = { lat: 59.95, lng: 30.33 };
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
              {/* comment-review text area*/}
              <fieldset id="commentContainer">
                <div className="row">
                  <div className="input-field">
                    <textarea
                      id="textarea1"
                      className="materialize-textarea"
                      defaultValue={''}
                    />
                    <label htmlFor="textarea1">Comment on this</label>
                  </div>
                </div>
                <div className="row">
                  <button
                    className="waves-effect waves-light btn-large"
                    type="submit"
                    name="action"
                  >
                    Post<i className="material-icons right">send</i>
                  </button>
                </div>
              </fieldset>
            </div>
            <div className="col s5">
              <SmallMap defaultCenter={this.center} defaultZoom={this.zoom} />
            </div>
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
