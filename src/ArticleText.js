import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import "./ArticleText.css";
import RankAndVote from './RankAndVote';

class ArticleText extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="articleBox">
        <RankAndVote post={this.props.article} index={0}/>
        <div className="articleBody">
          <h2 className="articleTitle">{this.props.article.title}</h2>
          <Link to={`/topics/${this.props.article.belongs_to}/articles`}>
            <p>{this.props.article.belongs_to.toUpperCase()}</p>
          </Link>
          <p>{this.props.article.body}</p>
          <p className="authoredBy">
            Submitted 6 hours ago by{" "}
            <Link to={`/users/${this.props.article.created_by}`}>
              {this.props.article.created_by}
            </Link>
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
  }
}

export default ArticleText;