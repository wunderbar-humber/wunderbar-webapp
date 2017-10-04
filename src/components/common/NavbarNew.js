import React, { Component } from 'react';

class NavbarNew extends Component {
  render() {
    return (
      <nav className="green lighten-2">
        <div className="nav-wrapper container">
          <a id="logo" className="brand-logo left">
            Wunderbar
          </a>

          <form className="right col l6">
            <div className="input-field inline ">
              <input id="search" type="search" required />
              <label className="label-icon" for="search">
                <i className="material-icons">search</i>
              </label>
              <i className="material-icons">close</i>
            </div>
          </form>

          <ul className="right ">
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
    );
  }
}
export default NavbarNew;
