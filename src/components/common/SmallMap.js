import React, { Component } from 'react';

// import GoogleMap from 'google-map-react';

/**
 * 
 * 
 * @class SmallMap
 * @extends {Component}
 */

//  class AnyReactComponent extends Component {
//    render() {
//      return (
//       <div style={{
//         position: 'relative', color: 'white', background: 'red',
//         height: 40, width: 60, top: -20, left: -30,
//       }}>
//         {this.props.text}
//       </div>
//      );
//    }
//  }

class SmallMap extends Component {
  render() {
    return (
      //   <GoogleMap
      //   height="300px"
      //   width="300px"
      //   defaultCenter={this.props.center}
      //   defaultZoom={this.props.zoom}
      // >
      //   <AnyReactComponent
      //     lat={59.955413}
      //     lng={30.337844}
      //     text={'Kreyser Avrora'}
      //   />
      // </GoogleMap>

      <div>
        <div className="row">
          <div className="col s12 m7">
            <div className="card">
              <div className="card-image">
                <img src="" alt=" " />
              </div>
              <div className="card-content">
                <p>Google Map Is Coming... </p>
                <p>Google Map Is Coming... </p>
                <p>Google Map Is Coming... </p>
                <p>Google Map Is Coming... </p>
                <p>Google Map Is Coming... </p>
                <p>Google Map Is Coming... </p>
                <p>Google Map Is Coming... </p>
                <p>Google Map Is Coming... </p>
                <p>Google Map Is Coming... </p>
                <p>Google Map Is Coming... </p>
                <p>Google Map Is Coming... </p>
                <p>Google Map Is Coming... </p>
                <p>Google Map Is Coming... </p>
                <p>Google Map Is Coming... </p>
                <p>Google Map Is Coming... </p>
                <p>Google Map Is Coming... </p>
                <p>Google Map Is Coming... </p>
              </div>
              <div className="card-action">
                <a href="">ORDER UBER</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SmallMap;
