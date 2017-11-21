import React, { Component } from 'react';
import './AboutDesign.css';

class About extends Component {
  render() {
    return (
      <div className="container">
        <div className="Profile">
          <div className="App" />
          <div class="row valign-wrapper">
            <div className="row">
              <div className="col s12 m5">
                <div className="card-panel black z-depth-5">
                  <span className="white-text">
                    Aditya Gulhane 23 year old Designer / Developer living in
                    Toronto. Originally from Nagpur, India. Love to make stuff.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
