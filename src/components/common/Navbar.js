import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div>
        <ul id="profile-dropdown" className="dropdown-content">
          <li>
            <a href="#!">Profile</a>
          </li>
          <li className="divider" />
          <li>
            <a href="#!">Bookmarks</a>
          </li>
          <li className="divider" />
          <li>
            <a href="#!">Logout</a>
          </li>
        </ul>
        <nav>
          <div className="nav-wrapper container">
            <a href="#" className="brand-logo left">
              Wunderbar
            </a>
            <form>
              <div className="input-field center hide-on-med-and-down">
                <input id="search" type="search" />
                <label className="label-icon" for="search">
                  <i className="material-icons">search</i>
                </label>
                <i className="material-icons">close</i>
              </div>
            </form>
            <ul className="right hide-on-med-and-down">
              <li>
                <a
                  href="#!"
                  data-activates="profile-dropdown"
                  className="dropdown-button"
                >
                  <img
                    src={this.props.profileImage}
                    alt="profile"
                    className="circle responsive-img"
                  />
                  {this.props.profileName}
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
