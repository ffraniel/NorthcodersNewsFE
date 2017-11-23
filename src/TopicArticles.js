import React, { Component } from 'react';
import './TopicArticles.css';
import Search from './Search';
import LoadingComp from './LoadingComp';
import TopicArticlesIterator from './TopicArticlesIterator';

import ListItems from './ListItems';
const bodyParser = require('body-parser');

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
                <Search />
                    {this.state.loading && <LoadingComp />}
                    {!this.state.loading && <ListItems posts={this.state.posts}/>}
            </div>
        )};  
        
    getTopicArticles (topicName) {
        return fetch (`https://northcoders-news-api.herokuapp.com/api/topics/${topicName}/articles`)
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

    // searchFilter(value) {
    //     const filteredPosts = this.state.posts.filter((emoji) => {
    //       const input = new RegExp(value,'ig');
    //       return input.test(emoji.keywords);
    //     })
    //     this.setState({posts:filteredList})
    //   }
}

export default TopicArticles;