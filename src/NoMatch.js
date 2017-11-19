import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import './NoMatch.css';

class NoMatch extends React.Component {
    render () {
        return (
            <div>
                <h1>404 PAGE NOT FOUND</h1>
            </div>
        )
    }
}

export default NoMatch;