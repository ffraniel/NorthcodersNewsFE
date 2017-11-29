import React, { Component } from 'react';
import './Comment.css';
import Search from './Search';
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
            loading:true
        })
        this.getComments = this.getComments.bind(this);
        this.addComment =this.addComment.bind(this);
    }
    componentDidMount() {
        this.getComments();
    }

    render () {
        return (
            <div className="commentsList">
                <Search />
                    {this.state.loading && <LoadingComp />}
                    {!this.state.loading && <ArticleComments comments={this.state.comments} />}
                
                    <CommentForm addComment={this.addComment}  articleID={this.props.match.params.articleID}/>
            </div>
        )};
    getComments () {
        return fetch (`https://northcoders-news-api.herokuapp.com/api/articles/${this.props.match.params.articleID}/comments`)
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


};
var currentCommentState;
export default Comment;