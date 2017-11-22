import React, { Component } from "react";
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import "./TopicArticlesIterator.css";
import Article from './Article';

class TopicArticlesIterator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="topicArticleIterator">
        {this.props.topicArticles.map(article => {
          return (
            <div className="topicArticle">
              <div className="rankAndVote">
                <a href="#">
                  <p>up</p>
                </a>
                <p>{article.votes}</p>
                <a href="#">
                  <p>down</p>
                </a>
              </div>
              <div className="topicArticleItem">
              <Link to={`/${article._id}/article`}>
                <h1>{article.title}</h1>
              </Link>
                <p>{article.body}</p>
                <h4 className="authoredBy">
                  Submitted by <a href="#">{article.created_by}</a> 4 hours ago
                </h4>
                <div className="listLinks">
                  <a href="#">
                    <p>{article.comments} comments</p>
                  </a>
                  <a href="#">
                    <p>reply</p>
                  </a>
                  <a href="#">
                    <p>share</p>
                  </a>
                  <a href="#">
                    <p>save</p>
                  </a>
                  <a href="#">
                    <p>hide</p>
                  </a>
                  <a href="#">
                    <p>report</p>
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

export default TopicArticlesIterator;
