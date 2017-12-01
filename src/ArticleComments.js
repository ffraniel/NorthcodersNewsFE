import React, { Component } from "react";
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import "./ArticleComments.css";
import Search from "./Search";
import LoadingComp from "./LoadingComp";
import Comment from "./Comment";
import NoMatch from "./NoMatch";
import CommentsRankAndVote from './CommentsRankAndVote';
import { setInterval } from "timers";

class ArticleComments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.comments,
      searchVal: ""
    };
    // this.deleteHandler = this.deleteHandler.bind(this);
  }

  render() {
    return (
      <div className="commentsIterator">
        {this.state.comments.map((comment, index) => {
          return (
            <div className="commentEntry">
              <CommentsRankAndVote post={comment} index={index}/>
              <div className="commentItem">
                <p>{comment.body}</p>
                <p className="authoredBy">
                Submitted 6 hours ago by <Link to={`/users/${comment.created_by}`}>{comment.created_by}</Link>
              </p>
              <div className="listLinks">
                <a href="#" onClick={scrollToCommenter}>
                  <p>Reply</p>
                </a>
                <a href="#" commentID={comment._id} onClick={this.deleteHandler.bind(this, comment) }> 
                  <p>Delete</p>
                </a>
              </div>
              </div>
            </div>
          );
        }, this) }
      </div>
    );
  }
  deleteHandler (comment) {
    this.props.deleteComment(comment);
  }
}

function scrollToCommenter (event) {
  event.preventDefault();
  document.querySelector('.commentForm').scrollIntoView({ 
    behavior: 'smooth' 
  })
}

export default ArticleComments;