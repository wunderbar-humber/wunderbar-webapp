import React from 'react';
import ReactDOM from 'react-dom';
import Restaurant from './Restaurant';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Restaurant />, div);
});
