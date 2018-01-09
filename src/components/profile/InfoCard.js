import React, { Component } from 'react';

class InfoCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <span className="card-title">
            {this.props.firstName}
            {this.props.lastName}
          </span>
          <p>Email:{this.props.email}</p>
          <p>{this.props.myinfo}</p>
        </div>
      </div>
    );
  }
}

export default InfoCard;
