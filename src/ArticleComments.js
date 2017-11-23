import React, { Component } from "react";
import "./ArticleComments.css";
import Search from "./Search";
import LoadingComp from "./LoadingComp";
import Comment from "./Comment";
import NoMatch from "./NoMatch";

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
        {this.state.comments.map(comment => {
          return (
            <div className="commentEntry">
              <div className="rankAndVote">
                <a href="#">
                  <p>up</p>
                </a>
                <p>{comment.votes}</p>
                <a href="#">
                  <p>down</p>
                </a>
              </div>
              <div className="commentItem">
                <p>{comment.body}</p>
                <a href="#" className="authoredBy">
                  <h4>Submitted 6 hours ago by {comment.created_by}</h4>
                </a>
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
