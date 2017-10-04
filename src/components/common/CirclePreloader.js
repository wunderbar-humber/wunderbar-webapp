import React, { Component } from 'react';

/**
 * Basic UI component for materialize css circle preloader
 * 
 * @see {http://materializecss.com/preloader.html#circular-color|Materialize Preloader}
 * @class CirclePreloader
 * @extends {Component}
 */
class CirclePreloader extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="preloader-wrapper big active">
          <div className="spinner-layer spinner-blue">
            <div className="circle-clipper left">
              <div className="circle" />
            </div>
            <div className="gap-patch">
              <div className="circle" />
            </div>
            <div className="circle-clipper right">
              <div className="circle" />
            </div>
          </div>

          <div className="spinner-layer spinner-red">
            <div className="circle-clipper left">
              <div className="circle" />
            </div>
            <div className="gap-patch">
              <div className="circle" />
            </div>
            <div className="circle-clipper right">
              <div className="circle" />
            </div>
          </div>

          <div className="spinner-layer spinner-yellow">
            <div className="circle-clipper left">
              <div className="circle" />
            </div>
            <div className="gap-patch">
              <div className="circle" />
            </div>
            <div className="circle-clipper right">
              <div className="circle" />
            </div>
          </div>

          <div className="spinner-layer spinner-green">
            <div className="circle-clipper left">
              <div className="circle" />
            </div>
            <div className="gap-patch">
              <div className="circle" />
            </div>
            <div className="circle-clipper right">
              <div className="circle" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CirclePreloader;
