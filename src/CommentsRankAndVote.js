import React, { Component } from "react";
import "./CommentsRankAndVote.css";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
const bodyParser = require('body-parser');

class CommentsRankAndVote extends React.Component {
    constructor(props) {
        super(props);
        this.state=({
            preLoadNumber:0
        })
        this.upVote = this.upVote.bind(this);
        this.downVote = this.downVote.bind(this);
        this.handleVoteDown = this.handleVoteDown.bind(this);
        this.handleVoteUp = this.handleVoteUp.bind(this);
        }

    render (){
        return(
            <div className="commentsRankAndVote">
                <button onClick={this.handleVoteUp}><i class="fa fa-hand-o-up"></i></button>
                <p className="numOfCommentsVotes">{this.props.post.votes + this.state.preLoadNumber}</p>
                <button onClick={this.handleVoteDown}><i class="fa fa-hand-o-down"></i></button>
              </div>
        )
    }
    handleVoteUp(event) {
        event.preventDefault();
        this.upVote();
    }
    handleVoteDown(event) {
        event.preventDefault();
        this.downVote();
    }

    upVote () {
        return fetch(`https://vast-tundra-92428.herokuapp.com/api/comments/${this.props.post._id}/?vote=up`, {method:'put'})
        .then(resBuffer =>{ return resBuffer;})
        .then((res)=>{
          let num = this.state.preLoadNumber + 1;  
          this.setState({
              preLoadNumber:num
          })
        })
        .catch(console.log)
      }
    
      downVote () {
        return fetch(`https://vast-tundra-92428.herokuapp.com/api/comments/${this.props.post._id}/?vote=down`, {method:'put'})
        .then(resBuffer =>{ return resBuffer;})
        .then((res)=>{
            let num = this.state.preLoadNumber - 1;  
            this.setState({
                preLoadNumber:num
            })
        })
        .catch(console.log)
      }
}

export default CommentsRankAndVote;