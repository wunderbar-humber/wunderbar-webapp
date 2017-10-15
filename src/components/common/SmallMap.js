import React, { Component } from 'react';

import GoogleMap from 'google-map-react';

/**
 * 
 * 
 * @class SmallMap
 * @extends {Component}
 */
class SmallMap extends Component {
  render() {
    return <GoogleMap center={this.props.center} zoom={this.props.zoom} />;
  }
}

export default SmallMap;
