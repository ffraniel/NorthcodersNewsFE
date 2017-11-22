import React, { Component } from 'react';
import './Article.css';
import LoadingComp from './LoadingComp';
import ArticleText from './ArticleText';

class Article extends React.Component {
    constructor(props) {
        super(props)
        this.state=({
            articles:[]        
        })
        this.getArticles = this.getArticles.bind(this);
    }
    componentDidMount () {
        this.getArticles();
    }

    render () {
        return (
            <div>
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////
                <h2>{this.props.match.params.articleID}</h2>
                {this.state.loading && <LoadingComp />}
                {!this.state.loading && <ArticleText articles={this.state.articles}/>}
            </div>
        )
    }

    getArticles () {
        return fetch (`https://northcoders-news-api.herokuapp.com/api/articles/${this.props.match.params.articleID}`)
        .then((resBuffer)=>{
            return resBuffer.json()
        })
        .then((res)=>{
            this.setState({
                articles:res.articles,
                loading:false               
            })
        })
        .catch(console.log)
    }

}

export default Article;