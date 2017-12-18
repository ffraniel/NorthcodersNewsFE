import React, { Component } from 'react';
import './Article.css';
import LoadingComp from './LoadingComp';
import ArticleText from './ArticleText';

class Article extends React.Component {
    constructor(props) {
        super(props)
        this.state=({
            article:{},
            loading:true,
            comments:[]        
        })
        this.getArticles = this.getArticles.bind(this);
        this.getComments =this.getComments.bind(this);
    }
    componentDidMount () {
        this.getArticles();
        this.getComments();
    }

    render () {
        return (
            <div>
                {this.state.loading && <LoadingComp />}
                {!this.state.loading && <ArticleText article={this.state.article} comments={this.state.comments}/>}
            </div>
        )
    }

    getArticles () {
        return fetch (`https://vast-tundra-92428.herokuapp.com/api/articles/${this.props.match.params.articleID}`)
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

    getComments () {
        return fetch (`https://vast-tundra-92428.herokuapp.com/api/articles/${this.props.match.params.articleID}/comments`)
        .then((resBuffer)=>{
            return resBuffer.json()
        })
        .then((res)=>{
            this.setState({
                comments:res.comments,
                loading:false,                
            })
        })
        .catch(console.log)
    }
}

export default Article;