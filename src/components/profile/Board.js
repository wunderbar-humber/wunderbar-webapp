import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class Board extends Component {
  render() {
    return (
      <Router>
        <body>
          <div class="container">
            <div class="col s2">
              <img
                src="https://www.pinterest.ca/pin/766315692816936128/"
                alt=""
                class="circle responsive-img"
                height="500"
                width="500"
              />
            </div>
          </div>
        </body>
      </Router>
    );
  }
}

export default Board;
