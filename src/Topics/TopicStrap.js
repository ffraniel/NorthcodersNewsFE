import React, { Component } from "react";
import "./TopicStrap.css";
import LoadingComp from "../Other/LoadingComp";
import TopicStrapIterator from "./TopicStrapIterator";

class TopicStrap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: [],
      loading: true
    };
    this.getTopics = this.getTopics.bind(this);
  }
  componentDidMount() {
    this.getTopics();
  }
  render() {
    return (
      <div className="topicStrap">
        {this.state.loading && <LoadingComp />}
        {!this.state.loading && (
          <TopicStrapIterator topics={this.state.topics} />
        )}
      </div>
    );
  }

  getTopics() {
    return fetch("http://localhost:3000/api/topics")
      .then(resBuffer => {
        return resBuffer.json();
      })
      .then(res => {
        this.setState({
          topics: res.topics,
          loading: false
        });
      });
  }
};

export default TopicStrap;
