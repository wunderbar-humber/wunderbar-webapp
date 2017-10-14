import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className="top-nav">
        <a className="logo" href="/">
          Wunderbar
        </a>

        <a className="signup" href="#!">
          Sign Up
        </a>

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
                  placeholder="Search..."
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
