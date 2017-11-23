import React, { Component } from 'react';
import './TopicArticles.css';
import Search from './Search';
import LoadingComp from './LoadingComp';
import TopicArticlesIterator from './TopicArticlesIterator';
const bodyParser = require('body-parser');

class TopicArticles extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            topicArticles:[],
            searchVal:'',
            loading:true
        })
        this.getTopicArticles = this.getTopicArticles.bind(this);
    }
    componentDidMount() {
        this.getTopicArticles();
    }
    componentWillReceiveProps() {
        this.getTopicArticles();
    }
    
    

    render () {
        return (
            <div className="topicArticlesList">
                <Search />
                    {this.state.loading && <LoadingComp />}
                    {!this.state.loading && <TopicArticlesIterator topicArticles={this.state.topicArticles}/>}
            </div>
        )};  
        
    getTopicArticles () {
        return fetch (`https://northcoders-news-api.herokuapp.com/api/topics/${this.props.match.params.topic.toLowerCase()}/articles`)
        .then((resBuffer)=>{
            return resBuffer.json()
        })
        .then((res)=>{
            this.setState({
                topicArticles:res.articles,
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