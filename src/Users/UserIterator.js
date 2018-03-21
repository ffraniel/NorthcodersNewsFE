import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./UserIterator.css";
import PropTypes from 'prop-types';

class UserIterator extends Component {
  render() {
    return (
      <ul className="userIterator">
        {this.props.allUsers.map((user, index) => {
          return (
            <li className="usersInList" key={index}>
              <NavLink className="textUserList" to={`/users/${user.username}`}>
                {user.username}
              </NavLink>
            </li>
          );
        })}
      </ul>
    );
  }
}

UserIterator.propTypes = {
  allUsers: PropTypes.array
};

export default UserIterator;
