import React, { Component } from 'react';

class Board extends Component {
  render() {
    return (
      <div className="container">
        <div className="col s2">
          <div className="row">
            <div className="col s12 m6">
              <div className="card z-depth-5">
                <div className="card-image">
                  <span className="card-title">Card Title</span>
                  <a className="btn-floating halfway-fab waves-effect waves-light red">
                    <i class="material-icons">+</i>
                  </a>
                </div>
                <div className="card-content">
                  <p>
                    I am a very simple card. I am good at containing small bits
                    of information. I am convenient because I require little
                    markup to use effectively.
                  </p>
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
