import React, { Component } from 'react';
import '../common/card/Card.css';
import './InfoCard.css';

class InfoCard extends Component {
  render() {
    return (
      <div className="container">
        <div className="col s12 m6">
          <div className="card" id="profile-info">
            <div className="card-content">
              <span className="card-title" id="title">
                {this.props.firstName}&nbsp;
                {this.props.lastName}
              </span>
              <p>Email:{this.props.email}</p>
              <p>{this.props.myinfo}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InfoCard;
