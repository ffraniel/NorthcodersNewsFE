import React, { Component } from "react";
import {Link} from 'react-router-dom';
import "./ArticleComments.css";
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
            <div className="commentEntry" key={index}>
              <CommentsRankAndVote post={comment}/>
              <div className="commentItem">
                <p className="commentBody">{comment.body}</p>
                <p className="authoredBy">
                Submitted 6 hours ago by <Link to={`/users/${comment.created_by}`}>{comment.created_by}</Link>
              </p>
              <div className="listLinks">
                <a href="#" onClick={scrollToCommenter}>
                  <p>reply</p>
                </a>
                <a href="#" commentid={comment._id} onClick={this.deleteHandler.bind(this, comment) }> 
                  <p>delete</p>
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