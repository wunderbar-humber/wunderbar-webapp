import React, { Component } from 'react';
import './ProfileButton.css';
import $ from 'jquery';

class ProfileButton extends Component {
  componentDidMount() {
    $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrainWidth: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: true, // Displays dropdown below the button
      alignment: 'left', // Displays dropdown with edge aligned to the left of button
      stopPropagation: false // Stops event propagation
    });
  }
  render() {
    return (
      <div id="main-wrapper">
        <a className="dropdown-button btn" href="#" data-activates="dropdown1">
          Sign Up
        </a>

        <ul id="dropdown1" className="dropdown-content">
          <li>
            <a href="#!" className="facebook white-text">
              <i className="material-icons" />Facebook Log In
            </a>
          </li>
          <li>
            <a href="#!" className="google white-text">
              Google+ Log In
            </a>
          </li>
          <li>
            <a href="#!" className="email white-text">
              Email Sign Up
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
export default ProfileButton;
