import React, { Component } from 'react';
import Reviews from '../common/review//Reviews';
import mainImage from '../restaurant/images/1.jpg';
import secondImage from '../restaurant/images/3.jpg';

class PastReviews extends Component {
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
      <div className="container">
        <Reviews reviewList={reviewList} />
      </div>
    );
  }
}

export default PastReviews;
