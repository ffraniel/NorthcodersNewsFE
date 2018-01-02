import React, { Component } from "react";
import Listcss from "./List.css";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import RankAndVote from './RankAndVote';


class ListItem extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="listIterator">
        {this.props.posts.map((post, index) => {
          return (
            <div className="listEntry" key={index} >
              <RankAndVote post={post} />
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
                    <p>{post.comments} comments-reply</p>
                  </Link>
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