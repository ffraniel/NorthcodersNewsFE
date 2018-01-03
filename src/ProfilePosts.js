import React, { Component } from 'react';
import './ProfilePosts.css';

class ProfilePosts extends React.Component {
        render() {
        return (
            <div className="profilePosts">  
                {this.props.userPosts.map((post, index)=>{
                    <div>
                        <h1>{post.title}</h1>
                        </div>
                })}
            </div>
        )
    }

}

export default ProfilePosts;