import React, { Component } from 'react';

class PastReviews extends Component {
  render() {
    return (
      <div className="container">
        <div className="col s2">
          <h1>List of your review</h1>
          <ul class="collection">
            <li class="collection-item avatar">
              <img src="images/yuna.jpg" alt="" class="circle" />
              <span class="title">Title</span>
              <p>
                First Line <br />
                Second Line
              </p>
              <a href="#!" class="secondary-content">
                <i class="material-icons">grade</i>
              </a>
            </li>
            <li class="collection-item avatar">
              <i class="material-icons circle">folder</i>
              <span class="title">Title</span>
              <p>
                First Line <br />
                Second Line
              </p>
              <a href="#!" class="secondary-content">
                <i class="material-icons">grade</i>
              </a>
            </li>
            <li class="collection-item avatar">
              <i class="material-icons circle green">insert_chart</i>
              <span class="title">Title</span>
              <p>
                First Line <br />
                Second Line
              </p>
              <a href="#!" class="secondary-content">
                <i class="material-icons">grade</i>
              </a>
            </li>
            <li class="collection-item avatar">
              <i class="material-icons circle red">play_arrow</i>
              <span class="title">Title</span>
              <p>
                First Line <br />
                Second Line
              </p>
              <a href="#!" class="secondary-content">
                <i class="material-icons">grade</i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default PastReviews;
