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
                <ul>
                    <li><NavLink className="topicMenuButtons" topicactive={ {color:'green'} } to={`/`}><h4>All</h4></NavLink></li>
                    {this.props.topics.map((topic, index) => {
                        return (
                        <li key={index} ><NavLink className="topicMenuButtons" topicactive={ {color:'green'} } to={`/topics/${topic.title}/articles`}>
                            <h4>{topic.title}</h4>
                        </NavLink></li>
                        )
                    })}
                </ul>
            </div>
        )}
}

export default TopicStrapIterator;