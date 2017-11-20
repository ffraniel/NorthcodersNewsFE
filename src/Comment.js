import React, { Component } from 'react';
import './Comment.css';
import Search from './Search';
import LoadingComp from './LoadingComp';
import ArticleComments from './ArticleComments';
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
    }
    componentDidMount() {
        this.getComments();
    }

    render () {
        return (
            <div className="commentsList">
                <Search />
                    {this.state.loading && <LoadingComp />}
                    {!this.state.loading && <ArticleComments comments={this.state.comments}/>}
            </div>
        )};
        // <Route path="/:articleID/comments" component={Comment} />
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


};

export default Comment;