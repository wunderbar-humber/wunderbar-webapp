import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className="top-nav">
        <h1 className="h1">
          <a href="/">Wunderbar</a>
        </h1>
        <h1 className="h1">
          <a href="#!">Sign In</a>
        </h1>
        <div className="flexsearch">
          <div className="flexsearch--wrapper">
            <form
              className="flexsearch--form browser-default"
              action="#"
              method="post"
            >
              <div className="flexsearch--input-wrapper">
                <input
                  className="browser-default flexsearch--input "
                  type="search"
                  placeholder="search"
                />
              </div>
              <input
                className="flexsearch--submit"
                type="submit"
                value="&#10140;"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
