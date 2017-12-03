import React, { Component } from 'react';

class Board extends Component {
  render() {
    return (
      <div className="container">
        <div className="row" />
        <div className="row" />
        <div className="row" />
        <div className="col s4">
          <div className="row">
            <div className="col s12 m6">
              <div className="card z-depth-5">
                <div className="card-image">
                  <img
                    src="https://i.pinimg.com/564x/b3/ec/40/b3ec40693b18dee972a4a91982e7e7c6.jpg"
                    alt={this.props}
                  />
                  <span className="card-title">Mello Melly</span>
                  <a className="btn-floating halfway-fab waves-effect waves-light red">
                    <i class="material-icons">+</i>
                  </a>
                </div>
                <div className="card-content">
                  <p>Now Here's a Photo of Mel Gibson for you to enjoy!</p>
                </div>
              </div>
            </div>
            <div className="col s12 m6">
              <div className="card z-depth-5">
                <div className="card-image">
                  <img
                    src="https://i.pinimg.com/736x/4a/a8/fa/4aa8fad6d6793a2a5e2599e321ccb6b9.jpg"
                    alt={this.props}
                  />
                  <span className="card-title" />
                  <a className="btn-floating halfway-fab waves-effect waves-light red">
                    <i class="material-icons">+</i>
                  </a>
                </div>
                <div className="card-content">
                  <p>Victoria Lake,Yoho National Park,Canada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col s4">
          <div className="row">
            <div className="col s12 m6">
              <div className="card z-depth-5">
                <div className="card-image">
                  <img
                    src="https://500px.com/photo/117487879/rocky-shore-in-georgian-bay-by-elena-elisseeva"
                    alt={this.props}
                  />
                  <span className="card-title" />
                  <a className="btn-floating halfway-fab waves-effect waves-light red">
                    <i class="material-icons">+</i>
                  </a>
                </div>
                <div className="card-content">
                  <p>Canadian Mountain Range</p>
                </div>
              </div>
            </div>
            <div className="col s12 m6">
              <div className="card z-depth-5">
                <div className="card-image">
                  <img
                    src="https://i.pinimg.com/564x/b3/ec/40/b3ec40693b18dee972a4a91982e7e7c6.jpg"
                    alt={this.props}
                  />
                  <span className="card-title">Mello Melly</span>
                  <a className="btn-floating halfway-fab waves-effect waves-light red">
                    <i class="material-icons">+</i>
                  </a>
                </div>
                <div className="card-content">
                  <p>Now Here's a Photo of Mel Gibson for you to enjoy!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Board;
