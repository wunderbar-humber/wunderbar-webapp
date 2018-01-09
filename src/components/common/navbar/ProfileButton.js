import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import jwt from 'jwt-simple';
import './ProfileButton.css';
import $ from 'jquery';
import { API } from '../../../assets/resources/config';

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

    const responseGoogle = response => {
      console.log(response);
      var payload = response.hg.id_token;
      var secret = Buffer.from('fe1a1915a379f3be5394b64d14794932', 'hex');

      var decoded = jwt.decode(payload, secret);
      console.log(decoded);
    };

    const responseFacebook = response => {
      console.log(response);

      fetch(API.host.concat(API.user.register), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: response.name,
          email: response.email,
          photo: response.picture.data.url
        })
      });
    };

    ReactDOM.render(
      <GoogleLogin
        clientId="365695980763-vvc5eerne3hipe0t4ouku615mlcm2aqb.apps.googleusercontent.com"
        buttonText="Google Log In"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />,
      document.getElementById('googleButton')
    );

    ReactDOM.render(
      <FacebookLogin
        appId="373900106403591"
        autoLoad={true}
        fields="name,email,picture"
        callback={responseFacebook}
      />,
      document.getElementById('facebookButton')
    );
  }

  render() {
    return (
      <div id="main-wrapper">
        <a className="dropdown-button btn" data-activates="dropdown1">
          Sign Up
        </a>

        <ul id="dropdown1" className="dropdown-content">
          <li>
            <a id="facebookButton">Facebook Log In</a>
          </li>
          <li>
            <a id="googleButton">Google</a>
          </li>
          <li>
            <a className="email white-text">Email Sign Up</a>
          </li>
        </ul>
      </div>
    );
  }
}
export default ProfileButton;
