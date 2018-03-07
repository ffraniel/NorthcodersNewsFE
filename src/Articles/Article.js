import React, { Component } from 'react';
import './Article.css';
import LoadingComp from '../Other/LoadingComp';
import ArticleText from './ArticleText';
import CommentsUnderArticle from '../Comments/CommentsUnderArticle';

class Article extends Component {
    constructor(props) {
        super(props)
        this.state=({
            article:{},
            loadingArticles:true,
            loadingComments:true,
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
            <div className="arti">
                {this.state.loading && <LoadingComp />}
                {!this.state.loadingArticles && <ArticleText article={this.state.article} comments={this.state.comments}/>}
                {!this.state.loadingComments && <CommentsUnderArticle comments={this.state.comments} articleID={this.props.match.params.articleID}/>}
            </div>
        )
    }
    // (`http://localhost:3000/api/articles/${this.props.match.params.articleID}
    getArticles () {
        return fetch (`http://localhost:3000/api/articles/${this.props.match.params.articleID}`)
        .then((resBuffer)=>{
            return resBuffer.json();
        })
        .then((res)=>{
            this.setState({
                article:res.article,
                loadingArticles:false               
            })
        })
        .catch(console.log)
    }
    // (`http://localhost:3000/api/articles/${this.props.match.params.articleID}/comments`)
    getComments () {
        return fetch (`http://localhost:3000/api/articles/${this.props.match.params.articleID}/comments`)
        .then((resBuffer)=>{
            return resBuffer.json()
        })
        .then((res)=>{
            this.setState({
                comments:res.comments,
                loadingComments:false,                
            })
        })
        .catch(console.log)
    }
}

export default Article;