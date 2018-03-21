import React, { Component } from 'react';
import './LoadingComp.css';

class LoadingComp extends Component {
        render () {
        return (
            <div>
                <div className="spinner">Loading...</div>
            </div>
        );
    }
}

export default LoadingComp;