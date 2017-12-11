import React, { Component } from 'react';
import Feed from '../home/Feed';

class Bookmarks extends Component {
  render() {
    return (
      <div className="container">
        <Feed restaurantList={testRestaurantList} />
      </div>
    );
  }
}

let testRestaurantList = [
  {
    name: 'Isshin',
    image:
      'https://static.wixstatic.com/media/ca289c_6f22b05392fd43b0a71a30f8ec041607~mv2.png_256',
    category: 'Japanese',
    address: 'College Street 232, Toronto, ON',
    phone: '(111)-111-111',
    price: '$$$'
  },
  {
    name: 'Kinton',
    image: 'http://www.kintonramen.com/img/logos/kinton.png',
    category: 'Japanese',
    address: 'King Street 232, Toronto, ON',
    phone: '(647)-111-111',
    price: '$$'
  },
  {
    name: 'Burrito Boyz',
    image:
      'https://static1.squarespace.com/static/578ce85a29687f705d94f1a2/57cb3aab579fb377697429d4/57f994eee58c620809383978/1476968741703/burritoboyzfood.jpg?format=1500w',
    category: 'Mexican',
    address: 'University Street 232, Toronto, ON',
    phone: '(111)-111-111',
    price: '$'
  },
  {
    name: 'Something else',
    image:
      'https://static.wixstatic.com/media/ca289c_6f22b05392fd43b0a71a30f8ec041607~mv2.png_256',
    category: 'Japanese',
    address: 'College Street 232, Toronto, ON',
    phone: '(111)-111-111',
    price: '$$'
  }
];

export default Bookmarks;
