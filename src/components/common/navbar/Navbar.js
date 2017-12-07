import React, { Component } from 'react';
import './Navbar.css';
import ProfileButton from './ProfileButton';

class Navbar extends Component {
  render() {
    return (
      <header>
        <div className="top-nav">
          <a className="logo" href="/">
            Wunderbar
          </a>

          {/* <a className="signup" href="#!">
           <ProfileButton/> Sign Up
        </a> */}
          <div className="signup">
            <ProfileButton />
          </div>

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
      </header>
    );
  }
}

export default Navbar;
