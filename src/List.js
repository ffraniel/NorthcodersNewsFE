import React, { Component } from 'react';
import './List.css';
import ListItems from './ListItems';
import Search from './Search';
import LoadingComp from './LoadingComp';
const bodyParser = require('body-parser');

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            posts:[],
            searchVal:'',
            loading:true
        })
        this.getPosts = this.getPosts.bind(this);
    }
    componentDidMount() {
        this.getPosts();
    }

    render () {
        return (
            <div className="mainList">
                <Search />
                    {this.state.loading && <LoadingComp />}
                    {!this.state.loading && <ListItems posts={this.state.posts}/>}
            </div>
        )};  

    getPosts () {
        return fetch ('https://northcoders-news-api.herokuapp.com/api/articles')
        .then((resBuffer)=>{
            return resBuffer.json()
        })
        .then((res)=>{
            this.setState({
                posts:res.articles,
                loading:false,                
            })
        })
        .catch(console.log)
    }

    // searchFilter(value) {
    //     const filteredPosts = this.state.posts.filter((emoji) => {
    //       const input = new RegExp(value,'ig');
    //       return input.test(emoji.keywords);
    //     })
    //     this.setState({posts:filteredList})
    //   }
}

export default List;