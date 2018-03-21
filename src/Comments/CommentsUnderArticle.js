import React, { Component } from "react";
import "./CommentsUnderArticle.css";
import ArticleComments from "./ArticleComments";
import CommentForm from "./CommentForm";
import PropTypes from 'prop-types';

class CommentsUnderArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.comments    
    };
    this.addComment = this.addComment.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
  }

  render() {
    return (
      <div className="commentsList">
        <div><button className="scrollCommentButton" onClick={scrollToCommenter}>Leave Comment</button></div>
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
      `http://localhost:3000/api/articles/${
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
      .catch(console.log);
  }

  deleteComment(comment) {
    return fetch (`http://localhost:3000/api/comments/${comment._id}/`,
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
    .catch(console.log);
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