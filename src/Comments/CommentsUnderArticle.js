import React, { Component } from "react";
import "./CommentsUnderArticle.css";
import ArticleComments from "./ArticleComments";
import CommentForm from "./CommentForm";
import PropTypes from 'prop-types';
import Error from '../Other/Error';

class CommentsUnderArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.comments,
      error:null
    };
    this.addComment = this.addComment.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
  }

  render() {
    return (
      <div className="commentsList">
        {this.state.error && <Error error={this.state.error} />}
        <div>
          <button className="scrollCommentButton" onClick={scrollToCommenter}>Leave Comment</button>
        </div>
          <ArticleComments
            comments={this.state.comments}
            deleteComment={this.deleteComment}
          />
        <CommentForm
          addComment={this.addComment}
          articleID={this.props.articleID}
        />
      </div>
    );
  }

  addComment(comment, articleID) {
    return fetch(
      `https://vast-tundra-92428.herokuapp.com/api/articles/${
        articleID
      }/comments`,
      {
        method: "post",
        body: comment,
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
      .then(resBuffer => {
        return resBuffer.json();
      })
      .then(res => {
        currentCommentState = this.state.comments;
        currentCommentState.push(res.comment);
        this.setState({
          comment: currentCommentState
        });
      })
      .catch((error)=>{
        this.setState({
            errors:error,
            loading:false
        });
    });
  }

  deleteComment(comment) {
    return fetch (`https://vast-tundra-92428.herokuapp.com/api/comments/${comment._id}/`,
    {method:"delete"})
    .then((resBuffer)=>{
        return resBuffer.json();
    })
    .then(()=>{
        var prevStateComments = this.state.comments;
        for(var i = 0; i < prevStateComments.length; i ++) {
            if(comment._id === prevStateComments[i]._id) {
                prevStateComments.splice(i, 1);
            }
        }
        this.setState({
            comments:prevStateComments
        });
    })
    .catch((error)=>{
      this.setState({
          errors:error,
          loading:false
      });
    });
  }


}
var currentCommentState;

function scrollToCommenter (event) {
  event.preventDefault();
  document.querySelector('.commentForm').scrollIntoView({ 
    behavior: 'smooth' 
  });
}

CommentsUnderArticle.propTypes = {
  comments:PropTypes.array,
  articleID:PropTypes.string
};

export default CommentsUnderArticle;