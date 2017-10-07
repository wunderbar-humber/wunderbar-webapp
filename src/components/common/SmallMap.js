import React, { Component } from 'react';
import $ from 'jquery';

/**
 * 
 * 
 * @class SmallMap
 * @extends {Component}
 */
class SmallMap extends Component {
  componentDidMount() {
    // function myMap() {
    //     var mapProp= {
    //         center:new google.maps.LatLng(51.508742,-0.120850),
    //         zoom:5,
    //     };
    //     var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
    //     }
  }

  render() {
    return (
      // <div id="googleMap" style="width:100%;height:400px;"></div>

      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">Google map</span>
          <p>Google map is coming... </p>
          <p>Google map is coming... </p>
          <p>Google map is coming... </p>
          <p>Google map is coming... </p>
          <p>Google map is coming... </p>
          <p>Google map is coming... </p>
          <p>Google map is coming... </p>
          <p>Google map is coming... </p>
          <p>Google map is coming... </p>
          <p>ХУЙНЯ ЕБНАЯ</p>
        </div>
        <div className="card-action">
          <a href="#">Bookmark</a>
          <a href="#">UBER</a>
        </div>
      </div>
    );
  }
}

export default SmallMap;
