import React, { Component } from 'react';
import mainImage from './images/1.jpg';

/**
 * This is the view which show all the details of the restaurant.
 * You navigate to this by clicking on an restaurant in the feed
 * 
 * @class Restaurant
 * @extends {Component}
 */
class Restaurant extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col s4">
              <img className="materialboxed" width="400" src={mainImage} />
            </div>
            <div className="col s4">
              <img
                className="materialboxed"
                width="400"
                src="http://www.blogto.com/listings/restaurants/upload/2014/01/20140109-ramenissin590-11.jpg"
              />
            </div>
            <div className="col s4">
              <img
                className="materialboxed"
                width="400"
                src="http://www.blogto.com/listings/restaurants/upload/2014/01/20140109-ramenissin590-06.jpg"
              />
            </div>
          </div>

          <div className="carousel">
            <a className="carousel-item" href="#one!">
              <img src="http://www.blogto.com/listings/restaurants/upload/2014/01/20140109-ramenissin590-01.jpg" />
            </a>
            <a className="carousel-item" href="#two!">
              <img src="http://www.blogto.com/listings/restaurants/upload/2014/01/20140109-ramenissin590-11.jpg" />
            </a>
            <a className="carousel-item" href="#three!">
              <img src="http://www.blogto.com/listings/restaurants/upload/2014/01/20140109-ramenissin590-06.jpg" />
            </a>
          </div>

          <div className="row">
            <div className="col s8">
              <h3>Ramen Issin</h3>
              <p>
                Popular destination specializing in Japanese ramen noodle soup,
                with vegetarian options available.
              </p>
              <p> Address: 421 College St, Toronto, ON M5T 1T1</p>
              <p> Hours: Open today · 11:30AM–10PM</p>
              <p> Order: doordash.com</p>
              <p> Phone: (416) 367-4013</p>
              <a className="link" href="">
                4 Reviews
              </a>
            </div>
            <div className="col s4">
              <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                  <span className="card-title">Google map</span>
                  <p>Google map is coming... </p>
                  <p>Google map is coming... </p>
                  <p>Google map is coming... </p>
                  <p>Google map is coming... </p>
                  <p>Google map is coming... </p>
                  <p>Google map is coming... </p>
                  <p>Google map is coming... </p>
                  <p>Google map is coming... </p>
                  <p>Google map is coming... </p>
                </div>
                <div className="card-action">
                  <a href="#">Bookmark</a>
                  <a href="#">UBER</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <form className="col s12">
              <div className="row">
                <div className="input-field col s12">
                  <textarea
                    id="textarea1"
                    className="materialize-textarea"
                    defaultValue={''}
                  />
                  <label htmlFor="textarea1">Comment on this</label>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="container">
          <ul className="collection">
            <li className="collection-item avatar">
              <img src="images/yuna.jpg" alt className="circle" />
              <span className="title">Review</span>
              <br />
              <span className="title">Name</span>
              <p>
                First Line <br />
                Second Line
              </p>
              <a href="#!" className="secondary-content">
                <i className="material-icons">like</i>
              </a>
            </li>
            <li className="collection-item avatar">
              <i className="material-icons circle">folder</i>
              <span className="title">Review</span>
              <br />
              <span className="title">Name</span>
              <p>
                First Line <br />
                Second Line
              </p>
              <a href="#!" className="secondary-content">
                <i className="material-icons">like</i>
              </a>
            </li>
            <li className="collection-item avatar">
              <i className="material-icons circle green">insert_chart</i>
              <span className="title">Review</span>
              <br />
              <span className="title">Name</span>
              <p>
                First Line <br />
                Second Line
              </p>
              <a href="#!" className="secondary-content">
                <i className="material-icons">like</i>
              </a>
            </li>
            <li className="collection-item avatar">
              <i className="material-icons circle red">play_arrow</i>
              <span className="title">Review</span>
              <br />
              <span className="title">Name</span>
              <p>
                First Line <br />
                Second Line
              </p>
              <a href="#!" className="secondary-content">
                <i className="material-icons">like</i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Restaurant;
