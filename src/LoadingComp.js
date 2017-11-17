import React, { Component } from 'react';
import LoadingCompCSS from './LoadingComp.css';

class LoadingComp extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <div>
                <h1>LOADING!!!!!</h1>
            </div>
        )
    }
}

export default LoadingComp;