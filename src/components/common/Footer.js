import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="page-footer">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">Wunderbar</h5>
              <p className="grey-text text-lighten-4">
                If you liked us, give a moment to look at our information.
              </p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">Links</h5>
              <ul>
                <li>
                  <a className="grey-text text-lighten-3" href="#modal1">
                    About Wunderbar
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">Wunderbar © 2017</div>
        </div>
      </footer>
    );
  }

  constructor(props) {
    super(props);
    this.state = { isModalOpen: false };
  }

  openModal() {
    this.setState({ isModalOpen: true });
  }

  closeModal() {
    this.setState({ isModalOpen: false });
  }
}

export default Footer;
