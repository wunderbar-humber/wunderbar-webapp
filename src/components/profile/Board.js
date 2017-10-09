import React, { Component } from 'react';

class Board extends Component {
  render() {
    return (
      <div className="container">
        <div className="col s2">
          <h1>Hello from Board component</h1>
          <img
            src="https://www.pinterest.ca/pin/766315692816936128/"
            alt=""
            className="circle responsive-img"
            height="500"
            width="500"
          />
        </div>
      </div>
    );
  }
}

export default Board;
