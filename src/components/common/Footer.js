import React, { Component } from 'react';
import './Footer.css';
import ReactModal from 'react-modal';

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
                  <a
                    onClick={this.handleOpenModal}
                    className="grey-text text-lighten-3"
                  >
                    About Wunderbar
                  </a>
                  <ReactModal
                    isOpen={this.state.showModal1}
                    contentLabel="Modal #1 Global Style Override Example"
                    onRequestClose={this.handleCloseModal}
                  >
                    <p>
                      Wunderbar is a app which will provide you status of your
                      favourite restaurants,live tracking of how busy that place
                      is, want to reach there call an uber from our app itself
                      and better yet want to rate your favourite joints.
                      Wunderbar is the place for you.
                    </p>
                    <button onClick={this.handleCloseModal}>Close</button>
                  </ReactModal>
                </li>
                <li>
                  <a
                    onClick={this.handleOpenModal2}
                    className="grey-text text-lighten-3"
                  >
                    About Us
                  </a>
                  <ReactModal
                    isOpen={this.state.showModal2}
                    contentLabel="Modal #2 Global Style Override Example"
                    onRequestClose={this.handleCloseModal2}
                  >
                    <p>
                      We are an energetic team with diversed culture having
                      passion and talent for our work
                    </p>
                    <button onClick={this.handleCloseModal2}>Close</button>
                  </ReactModal>
                </li>
                <li>
                  <a
                    onClick={this.handleOpenModal3}
                    className="grey-text text-lighten-3"
                  >
                    Contact us
                  </a>
                  <ReactModal
                    isOpen={this.state.showModal3}
                    contentLabel="Modal #3 Global Style Override Example"
                    onRequestClose={this.handleCloseModal3}
                  >
                    <p>
                      Wunderbar is a app which will provide you status of your
                      favourite restaurants,live tracking of how busy that place
                      is, want to reach there call an uber from our app itself
                      and better yet want to rate your favourite joints.
                      Wunderbar is the place for you.
                    </p>
                    <button onClick={this.handleCloseModal3}>Close</button>
                  </ReactModal>
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

  constructor() {
    super();
    this.state = {
      showModal: false,
      showModal2: false,
      showModal3: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleOpenModal2 = this.handleOpenModal2.bind(this);
    this.handleOpenModal3 = this.handleOpenModal3.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleCloseModal2 = this.handleCloseModal2.bind(this);
    this.handleCloseModal3 = this.handleCloseModal3.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleOpenModal2() {
    this.setState({ showModal2: true });
  }

  handleOpenModal3() {
    this.setState({ showModal2: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  handleCloseModal2() {
    this.setState({ showModal2: false });
  }

  handleCloseModal3() {
    this.setState({ showModal2: false });
  }
}

export default Footer;
