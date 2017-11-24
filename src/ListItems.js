import React, { Component } from "react";
import Listcss from "./List.css";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import TopicArticles from './TopicArticles';


class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.upVote = this.upVote.bind(this);
    this.downVote = this.downVote.bind(this);
  }

  render() {
    return (
      <div className="listIterator">
        {this.props.posts.map((post, index) => {
          return (
            <div className="listEntry">
              <div className="rankAndVote">
                <h1>{index + 1}</h1>
                <button onClick={() => this.upVote(this.post._id)}>Up</button>
                <p>{post.votes}</p>
                <button onClick={() => this.downVote(this.post._id)}>Down</button>
              </div>
              <div className="listItem">
                <Link to={`/${post._id}/article`}>
                  <h2 className="artTitle">{post.title}</h2>
                </Link>
                <Link to={`/topics/${post.belongs_to}/articles`}>
                  <p>{post.belongs_to.toUpperCase()}</p>
                </Link>
                <p className="authoredBy">
                  Submitted 6 hours ago by <Link to={`/users/${post.created_by}`}>{post.created_by}</Link>
                </p>
                <div className="listLinks">
                  <Link to={`/${post._id}/comments`}>
                    <p>{post.comments} comments</p>
                  </Link>
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
  upVote () {
    return fetch(`https://northcoders-news-api.herokuapp.com/api/articles/${this.post._id}/?vote=up`, {method:'put'})
    .then(resBuffer =>{ return resBuffer;})
    .then((res)=>{
      console.log(res.votes)
    })
    .catch(console.log)
  }

  downVote () {
    return fetch(`https://northcoders-news-api.herokuapp.com/api/articles/${this.post._id}/?vote=down`, {method:'put'})
    .then(resBuffer =>{ return resBuffer;})
    .then((res)=>{
      console.log(res.votes)
    })
    .catch(console.log)
  }

}


export default ListItem;