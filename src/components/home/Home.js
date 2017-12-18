import React, { Component } from 'react';
import Feed from './Feed';
import './Home.css';

/**
 * Filter Constants
 */
let FILTER_ALL = 'all';
let FILTER_RESTAURANTS = 'restaurants';
let FILTER_PUBS_BARS = 'pubs';
let FILTER_CAFE = 'cafes';

/**
 * Home components acts as the main component for the Home Page
 * 
 * @class Home
 * @extends {Component}
 */
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: [FILTER_RESTAURANTS],
      restaurantList: testRestaurantList
    };
  }

  /**
   * adds a filter to the array of filters in the state
   * 
   * @param {any} filter any of the FILTER_* constants
   * @memberof Home
   */
  addFilter(filter) {
    let updatedFilters = this.state.filters.slice(); // create copy of state array

    if (
      filter === FILTER_ALL ||
      (updatedFilters.length === 1 && updatedFilters[0] === FILTER_ALL)
    ) {
      // if filter is 'all', then remove all other filters and only keep that one
      updatedFilters = [FILTER_ALL];
    } else {
      // add only if filter doesn't already exist
      if (updatedFilters.indexOf(filter) === -1) {
        updatedFilters.push(filter);
      }
    }
    this.setState({ filters: updatedFilters });

    this.updateFeed(updatedFilters);
  }

  /**
   * Removes a filter from the filter array in the state
   * 
   * @param {any} filter any of the FILTER_* constants
   * @memberof Home
   */
  removeFilter(filter) {
    let updatedFilters = this.state.filters.slice(); // create copy of state array

    // remove element only if it exists
    let index = updatedFilters.indexOf(filter);
    if (index !== -1) {
      updatedFilters.splice(index, 1);
      this.setState({ filters: updatedFilters });
    }

    this.updateFeed(updatedFilters);
  }

  /**
   * Resets all filters and restaurant list
   * 
   * @param {any} e 
   * @memberof Home
   */
  reset(e) {
    this.setState({
      filters: [],
      restaurantList: []
    });
  }

  /**
   * Updates the state restaurant list according to the supplied filter array
   * 
   * @param {string[]} filters 
   * @memberof Home
   */
  updateFeed(filters) {
    let updatedRestaurantList = [];
    this.setState({
      restaurantList: updatedRestaurantList
    });
    filters.forEach(filter => {
      switch (filter) {
        case FILTER_ALL:
          updatedRestaurantList = updatedRestaurantList
            .concat(testRestaurantList)
            .concat(testCafeList)
            .concat(testPubList);
          break;

        case FILTER_RESTAURANTS:
          updatedRestaurantList = updatedRestaurantList.concat(
            testRestaurantList
          );
          break;

        case FILTER_CAFE:
          updatedRestaurantList = updatedRestaurantList.concat(testCafeList);
          break;

        case FILTER_PUBS_BARS:
          updatedRestaurantList = updatedRestaurantList.concat(testPubList);
          break;

        default:
          this.reset();
          break;
      }
    });
    this.setState({
      restaurantList: updatedRestaurantList
    });
  }

  render() {
    return (
      <main>
        <div className="row" id="home-page">
          <div className="col m3 l2 hide-on-small-only" id="side-nav">
            <ul>
              <li>
                <a
                  className="btn"
                  onClick={this.addFilter.bind(this, FILTER_ALL)}
                >
                  All
                </a>
              </li>
              <li>
                <a
                  className="btn"
                  onClick={this.addFilter.bind(this, FILTER_RESTAURANTS)}
                >
                  Restaurants
                </a>
              </li>
              <li>
                <a
                  className="btn"
                  onClick={this.addFilter.bind(this, FILTER_CAFE)}
                >
                  Cafes
                </a>
              </li>
              <li>
                <a
                  className="btn"
                  onClick={this.addFilter.bind(this, FILTER_PUBS_BARS)}
                >
                  Pubs &amp; Bars
                </a>
              </li>
              <li>
                <a className="btn" onClick={this.reset.bind(this)}>
                  Reset
                </a>
              </li>
              <div className="divider" />
              <li>
                <a className="btn">Settings</a>
              </li>
            </ul>
          </div>
          <div className="col s12 m9 l10" id="main-content">
            <div className="row" id="tag-area">
              {this.state.filters.map((filter, index) => {
                return (
                  <div className="chip" key={index}>
                    {filter}
                    <i
                      className="material-icons"
                      onClick={this.removeFilter.bind(this, filter)}
                    >
                      close
                    </i>
                  </div>
                );
              })}
            </div>
            <div className="row">
              <Feed restaurantList={this.state.restaurantList} />
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Home;

let testRestaurantList = [
  {
    id: '1',
    name: 'Isshin',
    image:
      'https://static.wixstatic.com/media/ca289c_6f22b05392fd43b0a71a30f8ec041607~mv2.png_256',
    category: 'Japanese',
    address: 'College Street 232, Toronto, ON',
    phone: '(111)-111-111',
    price: '$$$'
  },
  {
    id: '2',
    name: 'Kinton',
    image: 'http://www.kintonramen.com/img/logos/kinton.png',
    category: 'Japanese',
    address: 'King Street 232, Toronto, ON',
    phone: '(647)-111-111',
    price: '$$'
  },
  {
    id: '3',
    name: 'Burrito Boyz',
    image:
      'https://static1.squarespace.com/static/578ce85a29687f705d94f1a2/57cb3aab579fb377697429d4/57f994eee58c620809383978/1476968741703/burritoboyzfood.jpg?format=1500w',
    category: 'Mexican',
    address: 'University Street 232, Toronto, ON',
    phone: '(111)-111-111',
    price: '$'
  },
  {
    id: '11',
    name: 'Something else',
    image:
      'https://static.wixstatic.com/media/ca289c_6f22b05392fd43b0a71a30f8ec041607~mv2.png_256',
    category: 'Japanese',
    address: 'College Street 232, Toronto, ON',
    phone: '(111)-111-111',
    price: '$$'
  }
];

let testCafeList = [
  {
    id: '4',
    name: 'Cafe 1',
    image:
      'http://www.urbanphoto.net/blog/wp-content/uploads/2010/04/torontocafe3.jpg',
    category: 'Candian',
    address: 'College Street 232, Toronto, ON',
    phone: '(111)-111-111',
    price: '$$$'
  },
  {
    id: '5',
    name: 'Cafe 2',
    image: 'http://images.dailyhive.com/20160627074801/Quantum-Coffee-1.jpg',
    category: 'Japanese',
    address: 'King Street 232, Toronto, ON',
    phone: '(647)-111-111',
    price: '$$'
  },
  {
    id: '6',
    name: 'Cafe 3',
    image:
      'http://s3.amazonaws.com/btoimage/prism-thumbnails/articles/20ef-2016616-coffee-shops-toronto-west-side.jpg-resize-_opacity_100-frame_bg_color_FFF-gravity_center-q_70-preserve_ratio_true-w_1300_.jpg',
    category: 'Mexican',
    address: 'University Street 232, Toronto, ON',
    phone: '(111)-111-111',
    price: '$$$$'
  },
  {
    id: '7',
    name: 'Cafe 4',
    image:
      'https://torontopubs.files.wordpress.com/2012/07/victory-cafe-toronto.jpg',
    category: 'Japanese',
    address: 'College Street 232, Toronto, ON',
    phone: '(111)-111-111',
    price: '$$'
  }
];

let testPubList = [
  {
    id: '8',
    name: 'Pub 1',
    image: 'http://pubfrato.com/wp-content/uploads/2013/09/1.jpg',
    category: 'Candian',
    address: 'College Street 232, Toronto, ON',
    phone: '(111)-111-111',
    price: '$$$'
  },
  {
    name: 'Pub 2',
    image:
      'http://s3.amazonaws.com/btoimage/prism-thumbnails/articles/0e9b-2015421-queen-east-bars-pubs-toronto.jpg-resize_then_crop-_frame_bg_color_FFF-h_1365-gravity_center-q_70-preserve_ratio_true-w_2048_.jpg',
    category: 'Japanese',
    address: 'King Street 232, Toronto, ON',
    phone: '(647)-111-111',
    price: '$$'
  },
  {
    id: '9',
    name: 'Pub 3',
    image: 'https://i.ytimg.com/vi/27cZvWAroGo/maxresdefault.jpg',
    category: 'Mexican',
    address: 'University Street 232, Toronto, ON',
    phone: '(111)-111-111',
    price: '$$$$'
  },
  {
    id: '10',
    name: 'Pub 4',
    image:
      'https://static.wixstatic.com/media/ca289c_6f22b05392fd43b0a71a30f8ec041607~mv2.png_256',
    category: 'Japanese',
    address: 'College Street 232, Toronto, ON',
    phone: '(111)-111-111',
    price: '$$'
  }
];
