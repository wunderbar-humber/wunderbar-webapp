import React, { Component } from 'react';
import $ from 'jquery';

/**
 * 
 * 
 * @class Carousel
 * @extends {Component}
 */
class Carousel extends Component {
  componentDidMount() {
    $('.carousel.carousel-slider').carousel({ fullWidth: true });
  }

  render() {
    const images = this.props.images;
    return (
      <div className="carousel carousel-slider">
        {images.map(image => {
          return (
            <a className="carousel-item">
              <img src={image} alt="restaurant" />
            </a>
          );
        })}
      </div>
    );
  }
}

export default Carousel;
