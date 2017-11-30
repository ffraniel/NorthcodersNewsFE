import React, { Component } from "react";
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import "./ArticleComments.css";
import Search from "./Search";
import LoadingComp from "./LoadingComp";
import Comment from "./Comment";
import NoMatch from "./NoMatch";
import CommentsRankAndVote from './CommentsRankAndVote';

class ArticleComments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.comments,
      searchVal: ""
    };
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
                  <a href="#">
                    <p>permalink</p>
                  </a>
                  <a href="#">
                    <p>embed</p>
                  </a>
                  <a href="#">
                    <p>save</p>
                  </a>
                  <a href="#">
                    <p>report</p>
                  </a>
                  <a href="#">
                    <p>reply</p>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  
}
export default ArticleComments;
