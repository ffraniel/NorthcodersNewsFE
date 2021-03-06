import React, { Component } from "react";
import "./List.css";
import ListItems from "./ListItems";
import LoadingComp from "../Other/LoadingComp";
import Error from '../Other/Error';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      searchVal: "",
      loading: true,
      error:null
    };
    this.getPosts = this.getPosts.bind(this);
  }
  componentDidMount() {
    this.getPosts();
  }

  render() {
    return (
      <div className="mainList">
        {this.state.error && <Error error={this.state.error} />}
        {this.state.loading && <LoadingComp />}
        {!this.state.loading && <ListItems posts={this.state.posts} />}
      </div>
    );
  }

  getPosts() {
    return fetch("https://vast-tundra-92428.herokuapp.com/api/articles")
      .then(resBuffer => {
        return resBuffer.json();
      })
      .then(res => {
        this.setState({
          posts: res.articles,
          loading: false
        });
      })
      .catch((error)=>{
        this.setState({
            errors:error,
            loading:false
        });
    });
  }
}

export default List;