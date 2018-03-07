import React, { Component } from "react";
import {Link} from "react-router-dom";
import "./ArticleText.css";
import RankAndVote from './RankAndVote';

class ArticleText extends Component {
  render() {
    return (
      <div className="articleBox">
        <RankAndVote post={this.props.article} index={0}/>
        <div className="articleBody">
          <h2 className="articleTitle">{this.props.article.title}</h2>
          <Link to={`/topics/${this.props.article.belongs_to}/articles`}>
            <p className="uppercaseText">{this.props.article.belongs_to}</p>
          </Link>
          <p>{this.props.article.body}</p>
          <p className="authoredBy">
            Submitted a few hours ago by{" "}
            <Link to={`/users/${this.props.article.created_by}`}>
              {this.props.article.created_by}
            </Link>
          </p>
          <div className="listLinks">
          <Link to={`/${this.props.article._id}/comments`}>
                    <p>{this.props.comments.length} Comments - Click to Reply</p>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ArticleText;