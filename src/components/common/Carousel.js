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
    $('.carousel').carousel();
  }

  render() {
    const images = this.props.images;
    return (
      <div className="carousel">
        {images.map((image, index) => {
          return (
            <a className="carousel-item" key={index}>
              <img src={image} alt="restaurant" />
            </a>
          );
        })}
      </div>
    );
  }
}

export default Carousel;
