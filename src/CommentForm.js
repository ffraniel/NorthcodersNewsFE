import React, { Component } from 'react';
import './CommentForm.css';
import LoadingComp from './LoadingComp';
const bodyParser = require('body-parser');

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state=({
            value: 'Submit your comment here...',
            articleID:this.props.articleID

        });
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div>
                <form className="commentForm" onSubmit={this.handleSubmit}>
                    <textarea className="commentTextBox" value={this.state.value} onChange={this.handleChange}></textarea>
                    <button type="submit" value={"Submit"} className="commentButton">Post Comment</button>
                </form>
            </div>
        )
    }

    handleChange(event) {
        this.setState({value:event.target.value});
    }
    handleSubmit(event) {
        event.preventDefault();
        this.addComment(`{"comment": "${this.state.value}"}`)
    }

    addComment(comment) {
        return fetch (`https://northcoders-news-api.herokuapp.com/api/articles/${this.state.articleID}/comments`, 
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
            this.props.getComments();
        })
        .catch(console.log);
    }

}

export default CommentForm;