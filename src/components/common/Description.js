import React, { Component } from 'react';

/**
 * 
 * 
 * @class Description
 * @extends {Component}
 */
class Description extends Component {
  render() {
    return (
      <div>
        <h3 className="restaurantName">
          {this.props.name}

          {/* rating feature will give the number of stars(number of icons) to particular restaurant */}
          <i className="material-icons">starrate</i>

          {/* bandage will count number of comments */}
          <a href="">
            <span className="new badge" data-badge-caption="reviews">
              {this.props.numberOfReviews}{' '}
            </span>
          </a>
        </h3>

        <p className="restaurantDescription">{this.props.desc}</p>
        <div className="row">
          <div className="col s6">
            <p>
              <i className="material-icons">place</i> {this.props.address}
            </p>
          </div>
          <div className="col s6">
            <p>
              <i className="material-icons">watch</i> {this.props.hours}
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col s6">
            <p>
              <i className="material-icons">web</i>{' '}
              <a href={this.props.web}>{this.props.web}</a>
            </p>
          </div>
          <div className="col s6">
            <p>
              <i className="material-icons">phone</i> {this.props.phone}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Description;
