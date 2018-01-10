import React, { Component } from "react";
import {NavLink } from "react-router-dom";
import "./UserIterator.css";

class UserIterator extends Component {
  render() {
    return (
      <ul className="userIterator">
        {this.props.allUsers.map((user, index) => {
          return (
            <li className="usersInList" key={index}>
              <NavLink className="textUserList"to={`/users/${user.username}`} >{user.username}</NavLink>
            </li>

          );
        })}
      </ul>
    );
  }
}

export default UserIterator;
