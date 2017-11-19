import React, { Component } from 'react';
import './Article.css';

class Article extends React.Component {
    constructor(props) {
        super(props)
        this.state=({
            article:''
        })
    }
    render () {
        return (
            <div>
                <p>{this.state.article}</p>
            </div>
        )
    }
}

export default Article;