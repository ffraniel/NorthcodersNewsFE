import React, { Component } from "react";
import "./List.css";
import { Link, NavLink } from "react-router-dom";
import RankAndVote from './RankAndVote';

class ListItem extends Component {
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
                <NavLink  to={`/topics/${post.belongs_to}/articles`}>
                  <p className="topicLink" >{post.belongs_to.toUpperCase()}</p>
                </NavLink>
                <p className="authoredBy">
                  Submitted a few hours ago by <Link to={`/users/${post.created_by}`}>{post.created_by}</Link>
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