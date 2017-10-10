import React, { Component } from 'react';

/**
 * 
 * 
 * @class Description
 * @extends {Component}
 */
class Description extends Component {
  render() {
    return (
      <div>
        <h3>Ramen Isshin</h3>
        <p>
          {' '}
          Popular destination specializing in Japanese ramen noodle soup, with
          vegetarian options available.
        </p>
        <p> Address: 421 College St, Toronto, ON M5T 1T1</p>
        <p> Hours: Open today · 11:30AM–10PM</p>
        <p> Order: doordash.com</p>
        <p> Phone: (416) 367-4013</p>
        <a className="link" href="">
          4 Reviews
        </a>
      </div>
    );
  }
}

export default Description;
