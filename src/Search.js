import React, { Component } from 'react';
import './Search.css';

class Search extends React.Component {
    constructor(props){
        super(props);
        this.state=({
            searchVal: ''
        })
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.searchPosts = this.searchPosts.bind(this)
    }
    render () {
        return (
            <div className="search" onClick={notFunctionalSearch}>
                <form onSubmit={this.handleSubmit}>
                    Search
                    <input type="text" value={this.state.searchVal} className="col-md-10" onChange={this.handleChange} />
                    <input type="submit" value="Submit" />
                </form> 
            </div>
        )
    }
    handleSubmit (event) {
        event.preventDefault();
        console.log(this.state.searchVal);
        this.setState ({
          searchVal: ''
        })
      }
      handleChange (event) {
        this.setState({searchVal: event.target.value});
        // this.searchArticles(event.target.value);
        this.searchPosts(event.target.value);
      }
      searchPosts(value) {
        const input = new RegExp(value,'ig');
        const filteredList = this.state.articles.filter((article) => {
        return input.test(article.title);
        })
        this.setState({articles:filteredList})
    }
}

function notFunctionalSearch (e) {
    alert("I have not implemented the search functionality on this demo. This may be added at a later date...")
}

export default Search;