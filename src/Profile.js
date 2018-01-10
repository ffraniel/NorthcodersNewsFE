import React, { Component } from 'react';
import './Profile.css';
import LoadingComp from './LoadingComp';
import UserIterator from './UserIterator';

class Profile extends Component {
    constructor (props) {
        super(props);
        this.state=({
            user:[],
            allUsers:[],
            loading:true,
        })
        this.getUser = this.getUser.bind(this);
        this.getAllUsers = this.getAllUsers.bind(this);
    }
    componentDidMount(){
        this.getUser();
        this.getAllUsers();
    }

    render() {
        return (
            <div className="profileBox">
                    <div className="profilePicBox">
                        <img src={this.state.user.avatar_url} alt="User profile" />
                    </div>
                    <div className="profileDetails">
                        <h1>{this.state.user.username}</h1>
                        <p>{this.state.user.name}</p> 
                    </div>
                    <div className="otherUsers">
                        <h3>Other Users</h3>
                        {this.state.loading && <LoadingComp />}
                        {!this.state.loading && <UserIterator allUsers={this.state.allUsers}/>}
                    </div>
            </div>
        )
    }

    getUser () {
        return fetch(`https://vast-tundra-92428.herokuapp.com/api/users/${this.props.match.params.userID.toLowerCase()}`)
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

    getAllUsers () {
        return fetch('https://vast-tundra-92428.herokuapp.com/api/users/')
        .then((resBuffer)=>{
            return resBuffer.json();
        })
        .then((res)=>{
            this.setState({
                allUsers:res.users,
                loading:false
            })
        })
        .catch(console.log)
    }
}

export default Profile;