import React, { Component } from 'react';
import $ from 'jquery';

/**
 * 
 * 
 * @class Carousel
 * @extends {Component}
 */
class Carousel extends Component {
  componentDidMount() {}

  render() {
    const images = this.props.images;

    return (
      <div className="carousel carousel-slider">
        {images.map(image => {
          <a className="carousel-item">
            <img src={image} />
          </a>;
        })}
      </div>
    );
  }
}

export default Carousel;
