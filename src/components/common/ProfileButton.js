import React, { Component } from 'react';
import './ProfileButton.css';
import $ from 'jquery';

class ProfileButton extends Component {
  componentDidMount() {
    $('.user-menu').click(function() {
      $(this).toggleClass('show');
    });
  }
  render() {
    return (
      <div id="main-wrapper">
        <main className="main" role="main" id="main-content">
          <div id="main-top-bar">
            <a href="#" className="main-logo" />
            <div className="user-menu">
              <div class="user-menu-item">
                <div className="user-image-wrapper">
                  <span className="user-image">
                    <img src="" />
                  </span>
                </div>
                <div className="user-name-wrapper">
                  Santa <i className="fa fa-caret-down" />
                </div>
              </div>
              <div classname="user-dropdown">
                <a href="#" className="dropdown-item">
                  Home
                </a>
                <a href="#" className="dropdown-item">
                  Profile
                </a>
                <a href="#" className="dropdown-item">
                  {' '}
                  Company
                </a>
                <a href="#" className="dropdown-item">
                  {' '}
                  Billing
                </a>
                <a href="#" className="dropdown-item">
                  {' '}
                  Report a Problem
                </a>
                <a href="#" className="dropdown-item">
                  {' '}
                  Logout
                </a>
              </div>
            </div>
            <div className="shape" />
          </div>
        </main>
      </div>
    );
  }
}
export default ProfileButton;
