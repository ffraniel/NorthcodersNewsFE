import React, { Component } from "react";
import "./TopicStrap.css";
import LoadingComp from "../Other/LoadingComp";
import TopicStrapIterator from "./TopicStrapIterator";
import Error from '../Other/Error';

class TopicStrap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: [],
      loading: true,
      error:null
    };
    this.getTopics = this.getTopics.bind(this);
  }
  componentDidMount() {
    this.getTopics();
  }
  render() {
    return (
      <div className="topicStrap">
        {this.state.error && <Error error={this.state.error} />}
        {this.state.loading && <LoadingComp />}
        {!this.state.loading && (
          <TopicStrapIterator topics={this.state.topics} />
        )}
      </div>
    );
  }

  getTopics() {
    return fetch("https://vast-tundra-92428.herokuapp.com/api/topics")
      .then(resBuffer => {
        return resBuffer.json();
      })
      .then(res => {
        this.setState({
          topics: res.topics,
          loading: false
        });
      })
      .catch((error) => {
        this.setState({
          error:error,
          loading:false
        });
      });
  }
}

export default TopicStrap;