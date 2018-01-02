import React, { Component } from "react";
import "./RankAndVote.css";

class RankAndVote extends React.Component {
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
            <div className="rankAndVote">
                <button onClick={this.handleVoteUp}><i className="fa fa-hand-o-up"></i></button>
                <p className="numOfVotes">{(this.props.post.votes + this.state.preLoadNumber).toString()}</p>
                <button onClick={this.handleVoteDown}><i className="fa fa-hand-o-down"></i></button>
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
        return fetch(`https://vast-tundra-92428.herokuapp.com/api/articles/${this.props.post._id}/?vote=up`, {method:'put'})
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
        return fetch(`https://vast-tundra-92428.herokuapp.com/api/articles/${this.props.post._id}/?vote=down`, {method:'put'})
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

export default RankAndVote;