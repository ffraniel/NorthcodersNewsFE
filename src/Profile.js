import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import './Profile.css';


class Profile extends React.Component {
    constructor (props) {
        super(props);
        this.state=({
            user:[]
        })
        this.getUser = this.getUser.bind(this);
    }
    componentDidMount(){
        this.getUser();
    }

    render() {
        return (

            <div className="profileBox">
                <h1>{this.state.user.username}</h1>
                <p>{this.state.user.name}</p>
                <img src={this.state.user.avatar_url} alt="User profile picture" />
            </div>
        )
    }

    getUser () {
        return fetch(`http://localhost:3000/api/users/${this.props.match.params.userID.toLowerCase()}`)
        .then((resBuffer)=>{
            return resBuffer.json();
        })
        .then((res)=>{
            this.setState({
                user:res.users[0]
            })
        })
        .catch(console.log)
    }

}

export default Profile;