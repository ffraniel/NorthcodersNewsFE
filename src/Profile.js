import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import './Profile.css';

class Profile extends React.Component {
    constructor (props) {
        super(props);
        this.state=({

        })
    }
    render() {
        return (
            <div>
                <p>THIS IS A PROFILE PAGE</p>
            </div>
        )
    }

}

export default Profile;