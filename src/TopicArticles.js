import React, { Component } from 'react';
import './TopicArticles.css';
import LoadingComp from './LoadingComp';
import ListItems from './ListItems';

class TopicArticles extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            posts:[],
            searchVal:'',
            loading:true
        })
        this.getTopicArticles = this.getTopicArticles.bind(this);
    }
    componentDidMount() {
        const currentTopic = this.props.match.params.topic.toLowerCase();
        this.getTopicArticles(currentTopic);
    }

    componentWillReceiveProps (nextProps) {
        const currentTopic = this.props.match.params.topic.toLowerCase();
        const nextTopic = nextProps.match.params.topic.toLowerCase();
        if (currentTopic !== nextTopic) {
            this.getTopicArticles(nextTopic)
        }
      }

    render () {
        return (
            <div className="topicArticlesList">
                    {this.state.loading && <LoadingComp />}
                    {!this.state.loading && <ListItems posts={this.state.posts}/>}
            </div>
        )};  
        
    getTopicArticles (topicName) {
        return fetch (`https://vast-tundra-92428.herokuapp.com/api/topics/${topicName}/articles`)
        .then((resBuffer)=>{
            return resBuffer.json()
        })
        .then((res)=>{
            this.setState({
                posts:res.articles,
                loading:false,                
            })
        })
        .catch(console.log)
    }
}

export default TopicArticles;