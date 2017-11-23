import React, { Component } from 'react';
import './Article.css';
import LoadingComp from './LoadingComp';
import ArticleText from './ArticleText';

class Article extends React.Component {
    constructor(props) {
        super(props)
        this.state=({
            article:{},
            loading:true        
        })
        this.getArticles = this.getArticles.bind(this);
    }
    componentDidMount () {
        this.getArticles();
    }

    render () {
        return (
            <div>
                {this.state.loading && <LoadingComp />}
                {!this.state.loading && <ArticleText article={this.state.article}/>}
            </div>
        )
    }

    getArticles () {
        return fetch (`https://northcoders-news-api.herokuapp.com/api/articles/${this.props.match.params.articleID}`)
        .then((resBuffer)=>{
            return resBuffer.json();
        })
        .then((res)=>{
            this.setState({
                article:res,
                loading:false               
            })
        })
        .catch(console.log)
    }

}

export default Article;