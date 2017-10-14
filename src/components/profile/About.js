import React, { Component } from 'react';
import './AboutDesign.css';

class About extends Component {
  render() {
    return (
      <div className="container">
        <div className="Profile">
          <div className="App" />
          );
          <div class="row valign-wrapper">
            <div className="row">
              <div className="col s12 m5">
                <div className="card-panel black z-depth-5">
                  <span className="white-text">
                    I am a very simple card. I am good at containing small bits
                    of information. I am convenient because I require little
                    markup to use effectively. I am similar to what is called a
                    panel in other frameworks.
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
