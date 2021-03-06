import React, { Component } from "react";
import "./CommentsRankAndVote.css";
import PropTypes from 'prop-types';
import Error from '../Other/Error';

class CommentsRankAndVote extends Component {
    constructor(props) {
        super(props);
        this.state=({
            preLoadNumber:0,
            error:null
        });
        this.upVote = this.upVote.bind(this);
        this.downVote = this.downVote.bind(this);
        this.handleVoteDown = this.handleVoteDown.bind(this);
        this.handleVoteUp = this.handleVoteUp.bind(this);
        }

    render (){
        return(
            <div className="commentsRankAndVote">
                {this.state.error && <Error error={this.state.error} />}
                <button onClick={this.handleVoteUp}><i className="fa fa-hand-o-up"></i></button>
                <p className="numOfCommentsVotes">{(this.props.post.votes + this.state.preLoadNumber).toString()}</p>
                <button onClick={this.handleVoteDown}><i className="fa fa-hand-o-down"></i></button>
              </div>
        );
    }
    handleVoteUp(event) {
        event.preventDefault();
        let num = this.state.preLoadNumber + 1;  
        this.setState({
            preLoadNumber:num
        });
        this.upVote();
    }
    handleVoteDown(event) {
        event.preventDefault();
        let num = this.state.preLoadNumber - 1;  
        this.setState({
            preLoadNumber:num
        });
        this.downVote();
    }

    upVote () {
        return fetch(`https://vast-tundra-92428.herokuapp.com/api/comments/${this.props.post._id}/?vote=up`, {method:'put'})
        .then(resBuffer =>{ return resBuffer;})
        .then(()=>{
        })
        .catch((error)=>{
            this.setState({
                errors:error,
                loading:false
            });
        });
      }
    
    downVote () {
        return fetch(`https://vast-tundra-92428.herokuapp.com/api/comments/${this.props.post._id}/?vote=down`, {method:'put'})
        .then(resBuffer =>{ return resBuffer;})
        .then(()=>{
        })
        .catch((error)=>{
            this.setState({
                errors:error,
                loading:false
            });
        });
    }
}

CommentsRankAndVote.propTypes = {
    post: PropTypes.object
};

export default CommentsRankAndVote;