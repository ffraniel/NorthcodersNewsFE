import React, { Component } from 'react';
import './CommentForm.css';
import LoadingComp from './LoadingComp';
const bodyParser = require('body-parser');

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state=({
            value: '',
            articleID: this.props.articleID
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
        this.props.addComment(`{"comment": "${this.state.value}"}`, this.state.articleID);
        this.setState({value:''})
    }

}

export default CommentForm;