import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import NavbarNew from './NavbarNew';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Navbar />, div);
  ReactDOM.render(<NavbarNew />, div);
});
