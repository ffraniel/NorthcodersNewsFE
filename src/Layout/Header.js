import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import TopicStrap from '../Topics/TopicStrap';
import StatsBox from './StatsBox';

class Header extends Component {

    render () {
        return (
            <div className="header">
                <div className="topHeader">
                    <div>
                        <Link to="/" >
                            <h1 className="pageTitle">Saiddit News</h1>
                        </Link>
                    </div>
                </div>
                <StatsBox />
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