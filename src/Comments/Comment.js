import React, { Component } from "react";
import "./Comment.css";
import LoadingComp from "../Other/LoadingComp";
import ArticleComments from "./ArticleComments";
import CommentForm from "./CommentForm";

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      searchVal: "",
      loading: true,
      articleTitle: "",
      artLoading: true
    };
    this.getComments = this.getComments.bind(this);
    this.addComment = this.addComment.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
  }
  componentDidMount() {
    this.getComments(this.props.match.params.articleID);
    this.getTitle(this.props.match.params.articleID);
  }

  render() {
    return (
      <div className="commentsList">
        {this.state.artLoading && <LoadingComp />}
        {!this.state.artLoading && <div><h1>{this.state.articleTitle}</h1> <button className="scrollCommentButton" onClick={scrollToCommenter}>Leave Comment</button></div>}
        {this.state.loading && <LoadingComp />}
        {!this.state.loading && (
          <ArticleComments
            comments={this.state.comments}
            deleteComment={this.deleteComment}
          />
        )}
        <CommentForm
          addComment={this.addComment}
          articleID={this.props.match.params.articleID}
        />
      </div>
    );
  }
  getComments(artID) {
    return fetch(
      `http://localhost:3000/api/articles/${
        artID
      }/comments`
    )
      .then(resBuffer => {
        return resBuffer.json();
      })
      .then(res => {
        this.setState({
          comments: res.comments,
          loading: false
        });
      })
      .catch(console.log);
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
    .then((res)=>{
        var prevStateComments = this.state.comments;
        for(var i = 0; i < prevStateComments.length; i ++) {
            if(comment._id === prevStateComments[i]._id) {
                prevStateComments.splice(i, 1)
            }
        }
        this.setState({
            comments:prevStateComments
        });
    })
    .catch(console.log)
  }

  getTitle(artID) {
    return fetch(
      `http://localhost:3000/api/articles/${artID}`
    )
      .then(resBuffer => {
        return resBuffer.json();
      })
      .then(res => {
        this.setState({
          articleTitle: res.title,
          artLoading: false
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
  })
}

export default Comment;