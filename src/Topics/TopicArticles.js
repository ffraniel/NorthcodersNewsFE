import React, { Component } from 'react';
import './TopicArticles.css';
import LoadingComp from '../Other/LoadingComp';
import ListItems from '../Articles/ListItems';
import PropTypes from 'prop-types';
import Error from '../Other/Error';

class TopicArticles extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            posts:[],
            searchVal:'',
            loading:true,
            error:null
        });
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
            this.getTopicArticles(nextTopic);
        }
      }

    render () {
        return (
            <div className="topicArticlesList">
                    {this.state.error && <Error error={this.state.error} />}
                    {this.state.loading && <LoadingComp />}
                    {!this.state.loading && <ListItems posts={this.state.posts}/>}
            </div>
        );
    }  
        
    getTopicArticles (topicName) {
        return fetch (`http://localhost:3000/api/topics/${topicName}/articles`)
        .then((resBuffer)=>{
            return resBuffer.json();
        })
        .then((res)=>{
            this.setState({
                posts:res.articles,
                loading:false,                
            });
        })
        .catch((error)=>{
            this.setState({
                error:error,
                loading:false
            });
        });
    }
}

TopicArticles.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            topic:PropTypes.string
        }).isRequired,
    }).isRequired
  };

export default TopicArticles;