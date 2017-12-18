import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './../common/card/Card';

class Users extends Component {
  render() {
    return (
      <div className="col s12 cards-container">
        {this.props.infoList.map((users, index) => {
          return (
            <Card
              key={index}
              firstName={users.firstName}
              lastName={users.lastName}
              emailAddress={users.email}
            />
          );
        })}
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
