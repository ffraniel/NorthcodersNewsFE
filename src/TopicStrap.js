import React, { Component } from 'react';
import './TopicStrap.css';
import LoadingComp from './LoadingComp';
import TopicStrapIterator from './TopicStrapIterator';

class TopicStrap extends React.Component {
    constructor(props) {
        super(props);
        this.state=({
            topics:[],
            loading:true
        })
        this.getTopics = this.getTopics.bind(this);
    }
    componentDidMount() {
        this.getTopics();
    }
    render () {
        return (
            <div className="topicStrap">
                {this.state.loading && <LoadingComp />}
                {!this.state.loading && <TopicStrapIterator topics={this.state.topics}/>}
            </div>
        )
    }

    getTopics () {
        return fetch ('https://vast-tundra-92428.herokuapp.com/api/topics')
        .then((resBuffer)=>{
            return resBuffer.json()
        })
        .then((res)=>{
            this.setState({
                topics:res.topics,
                loading:false
            })
        })
    }
}

export default TopicStrap;