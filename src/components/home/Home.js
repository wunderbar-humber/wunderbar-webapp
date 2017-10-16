import React, { Component } from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
import Card from './../common/Card';
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
    this.state = { filters: [FILTER_RESTAURANTS, FILTER_CAFE] };
  }

  /**
   * adds a filter to the array of filters in the state
   * 
   * @param {any} filter any of the FILTER_* constants
   * @memberof Home
   */
  addFilter(filter) {
    let updatedFilters = this.state.filters.slice(); // create copy of state array

    // add only if filter doesn't already exist
    if (updatedFilters.indexOf(filter) === -1) {
      updatedFilters.push(filter);
      this.setState({ filters: updatedFilters });
    }
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
              <Card
                restaurantName="Isshin"
                restaurantImage="https://static.wixstatic.com/media/ca289c_6f22b05392fd43b0a71a30f8ec041607~mv2.png_256"
                restaurantCategory="Oriental"
                restaurantAddress="College Street 232, Toronto, ON"
                restaurantPhone="(111)-111-1111"
                restaurantPrice="$$"
              />
              <Card
                restaurantName="Isshin"
                restaurantImage="https://static.wixstatic.com/media/ca289c_6f22b05392fd43b0a71a30f8ec041607~mv2.png_256"
                restaurantCategory="Oriental"
                restaurantAddress="College Street 232, Toronto, ON"
                restaurantPhone="(111)-111-1111"
                restaurantPrice="$$"
              />
              <Card
                restaurantName="Isshin"
                restaurantImage="https://static.wixstatic.com/media/ca289c_6f22b05392fd43b0a71a30f8ec041607~mv2.png_256"
                restaurantCategory="Oriental"
                restaurantAddress="College Street 232, Toronto, ON"
                restaurantPhone="(111)-111-1111"
                restaurantPrice="$$"
              />
              <Card
                restaurantName="Isshin"
                restaurantImage="https://static.wixstatic.com/media/ca289c_6f22b05392fd43b0a71a30f8ec041607~mv2.png_256"
                restaurantCategory="Oriental"
                restaurantAddress="College Street 232, Toronto, ON"
                restaurantPhone="(111)-111-1111"
                restaurantPrice="$$"
              />
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Home;
