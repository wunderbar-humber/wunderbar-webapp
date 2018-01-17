import React, { Component } from 'react';
import Users from '../profile/Users';

class About extends Component {
  render() {
    this.firstName = 'Aditya';
    this.lastName = 'Gulhane';
    this.email = 'aditya.gulhane@yahoo.com';
    this.myinfo =
      "I'm a young developer from Toronto, Canada working in Web Development Technologies ";

    return (
      <div className="container">
        <div className="row">
          <div className="center-align">
            <Users
              firstName={this.firstName}
              lastName={this.lastName}
              email={this.email}
              myinfo={this.myinfo}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
