import React, { Component } from "react";
import {NavLink } from "react-router-dom";
import "./UserIterator.css";

class UserIterator extends React.Component {
  render() {
    return (
      <ul className="UserIterator">
        {this.props.allUsers.map((user, index) => {
          return (
            <li key={index}>
              <NavLink to={`/users/${user.username}`} >{user.username}</NavLink>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default UserIterator;
