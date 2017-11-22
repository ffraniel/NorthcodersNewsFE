import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import './TopicStrapIterator.css';

class TopicStrapIterator extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="topicStrapIterator">
                <Link to={`/`}><h4>All</h4></Link>
                {this.props.topics.map((topic) => {
                    return (
                    <Link to={`/topics/${topic.title}/articles`}>
                        <h4>{topic.title}</h4>
                    </Link>
                    )
                })}
            </div>
            
            
        )}
}

export default TopicStrapIterator;