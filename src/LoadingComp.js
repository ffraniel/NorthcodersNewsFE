import React, { Component } from 'react';
import './LoadingComp.css';

class LoadingComp extends React.Component {
        render () {
        return (
            <div>
                {/* <h1>LOADING!!!!!</h1> */}
                <div className="spinner">Loading...</div>
            </div>
        )
    }
}

export default LoadingComp;