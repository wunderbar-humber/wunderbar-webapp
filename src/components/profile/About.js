import React, { Component } from 'react';
import './AboutDesign.css';
import Users from '../profile/Users';

class About extends Component {
  render() {
    this.firstName = 'Aditya';
    this.lastName = 'Gulhane';
    this.email = 'aditya.gulhane@yahoo.com';

    return (
      <div className="container">
        <div className="row">
          <div className="col s6">
            <Users
              firstName={this.firstName}
              lastName={this.lastName}
              email={this.email}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
