import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <div className="row">
        <div className="col s12 m3">
          <div className="card">
            <div className="card-image">
              <img src={this.props.restaurantImage} />
              <a className="btn-floating halfway-fab waves-effect waves-light red">
                <i className="material-icons">add</i>
              </a>
            </div>
            <div className="card-content">
              <span className="card-title">{this.props.restaurantName}</span>
              <p>
                Category: {this.props.restaurantCategory} || Price:{' '}
                {this.props.restaurantPrice} || Crowd:
              </p>
              <p>Address: {this.props.restaurantAddress}</p>
              <p>Phone: {this.props.restaurantPhone}</p>
            </div>
            <div className="card-action">
              <a className="green-text" href="#">
                <i className="material-icons">done</i>Like
              </a>
              <a className="red-text right" href="#">
                <i className="material-icons">clear</i>Dislike
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Card;
