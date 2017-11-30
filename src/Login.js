import React, { Component } from 'react';
import './Login.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state=({
        })
    }
    render () {
        return (
            <div className="login">
                            <h4>Login or sign up</h4>
                            <form onSubmit={this.props.loginSubmit} >
                                <p>Username</p>
                                <input type="text" className="col-md-10"  />
                                <input type="submit" value="Submit" />
                            </form> 
                            
            </div>
        )
    }
}



export default Login;