import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './Carousel';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const images = ['image1', 'image2'];
  ReactDOM.render(<Carousel images={images} />, div);
});
