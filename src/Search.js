import React, { Component } from 'react';
import SearchCSS from './Search.css';

class Search extends React.Component {
    render () {
        return (
            <div className="search">
                <form action="/localhost/3000" method="post">
                    Search
                    <input type="text" name="Search"></input>
                    <input type="submit" value="Submit"></input>
                </form> 
            </div>
        )
    }
}

export default Search;