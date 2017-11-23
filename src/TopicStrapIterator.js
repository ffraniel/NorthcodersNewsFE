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
                <NavLink topicActive={ {color:'green'} } to={`/`}><h4>All</h4></NavLink>
                {this.props.topics.map((topic) => {
                    return (
                    <NavLink topicActive={ {color:'green'} } to={`/topics/${topic.title}/articles`}>
                        <h4>{topic.title}</h4>
                    </NavLink>
                    )
                })}
            </div>
            
            
        )}
}

export default TopicStrapIterator;