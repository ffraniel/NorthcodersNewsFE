import React, { Component } from 'react';
import './Error.css';
import PropTypes from 'prop-types';

class Error extends Component {
        render () {
        return (
          <h4 className="error">{this.props.error.message}</h4>
        );
    }
}

Error.propTypes = {
    error: PropTypes.object
};

export default Error;