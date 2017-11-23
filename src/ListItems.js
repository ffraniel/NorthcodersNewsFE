import React, { Component } from "react";
import Listcss from "./List.css";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";

class ListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: this.props.posts
    };
  }

  render() {
    return (
      <div className="listIterator">
        {this.state.posts.map((post, index) => {
          return (
            <div className="listEntry">
              <div className="rankAndVote">
                <h1>{index + 1}</h1>
                <a href="#">
                  <p>up</p>
                </a>
                <p>{post.votes}</p>
                <a href="#">
                  <p>down</p>
                </a>
              </div>
              <div className="listItem">
                <Link to={`/${post._id}/article`}>
                  <h2 className="artTitle">{post.title}</h2>
                </Link>
                <p className="authoredBy">
                  Submitted 6 hours ago by <a href="#">{post.created_by}</a>
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
}
export default ListItem;
