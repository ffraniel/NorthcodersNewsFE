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
            <div className="login" onClick={notFunctional}>
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

function notFunctional (e) {
    alert("I have not implemented login functionality on this demo. The login component is here for visual purposes only.")
}


export default Login;