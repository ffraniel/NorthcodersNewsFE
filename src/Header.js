import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import Login from './Login';
import './Header.css';
import TopicStrap from './TopicStrap';

class Header extends React.Component {

    render () {
        return (
            <div className="header">
                <div className="topHeader">
                    <div>
                        <Link to="/" >
                            <h1>Saiddit News</h1>
                        </Link>
                    </div>
                    <Login />
                </div>
                <div className="bottomHeader">
                    <div className="headImgCont">
                        <img id="headerImage" src="https://www.redditstatic.com/listingsignupbar-orbit-1.png" alt="reddit style header background" />
                    </div>
                </div>
                <TopicStrap />
            </div>
        )
    }

}

export default Header;