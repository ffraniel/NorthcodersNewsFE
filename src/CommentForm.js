import React, { Component } from 'react';
import './CommentForm.css';

class CommentForm extends Component {
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
                <form id="commentForm" className="commentForm" onSubmit={this.handleSubmit}>
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