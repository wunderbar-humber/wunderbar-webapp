import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InfoCard from './InfoCard';

class Users extends Component {
  render() {
    return (
      <div className="col s12 cards-container">
        <InfoCard
          firstName={this.props.firstName}
          lastName={this.props.lastName}
          email={this.props.email}
          myinfo={this.props.myinfo}
        />
      </div>
    );
  }
}

Users.propTypes = {
  infoList: PropTypes.arrayOf(
    PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      email: PropTypes.string.isRequired
    })
  )
};

export default Users;
