import React, { Component } from 'react';
import './Comment.css';
import LoadingComp from './LoadingComp';
import ArticleComments from './ArticleComments';
import CommentForm from './CommentForm';
const bodyParser = require('body-parser');

class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            comments:[],
            searchVal:'',
            loading:true,
            articleTitle:'',
            artLoading:true
        })
        this.getComments = this.getComments.bind(this);
        this.addComment = this.addComment.bind(this);
    }
    componentDidMount() {
        this.getComments(this.props.match.params.articleID);
        this.getTitle(this.props.match.params.articleID);
    }

    render () {
        return (
            <div className="commentsList">
                {this.state.artLoading && <LoadingComp />}
                {!this.state.artLoading && <h1>{this.state.articleTitle}</h1>}
                {this.state.loading && <LoadingComp />}
                {!this.state.loading && <ArticleComments comments={this.state.comments} />}
                <CommentForm addComment={this.addComment}  articleID={this.props.match.params.articleID}/>
            </div>
        )};
    getComments (artID) {
        return fetch (`https://northcoders-news-api.herokuapp.com/api/articles/${artID}/comments`)
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

    addComment(comment, articleID) {
        return fetch (`https://northcoders-news-api.herokuapp.com/api/articles/${articleID}/comments`, 
        { 
        method:"post", 
        body: comment,
        headers: {
          "Content-Type": "application/json"
            }
        })
        .then((resBuffer)=>{
            return resBuffer.json();
        })
        .then((res)=>{
            currentCommentState = this.state.comments;
            currentCommentState.push(res.comment);
            this.setState({
                comment:currentCommentState
            })
        })
        .catch(console.log);
    }
    getTitle (artID) {
        return fetch (`https://northcoders-news-api.herokuapp.com/api/articles/${artID}`)
        .then((resBuffer)=>{
            return resBuffer.json();
        })
        .then((res)=>{
            this.setState({
                articleTitle:res.title,
                artLoading:false
            })
        })
        .catch(console.log)
    }


};
var currentCommentState;
export default Comment;