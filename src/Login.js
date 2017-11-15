import React, { Component } from 'react';

class Login extends React.Component {
    render () {
        return (
            <div className="login">
                <h4>Login or sign up</h4>
                <form action="/localhost/3000" method="post">
                    Username
                    <input type="text" name="Username"></input>
                    Last name:
                    <input type="text" name="Password"></input>
                    <input type="submit" value="Submit"></input>
                </form> 
            </div>
        )
    }
}

export default Login;