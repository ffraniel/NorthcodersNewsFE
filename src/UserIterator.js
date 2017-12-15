import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import './UserIterator.css';

class UserIterator extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
                <ul className="UserIterator">
                    {this.props.allUsers.map((user)=>{
                        return (
                            <li><NavLink to={`/users/${user.username}`}>{user.username}</NavLink></li>
                        )
                    })}
                </ul>           
            
        )}
}

export default UserIterator;



