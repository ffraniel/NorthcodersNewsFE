import React, { Component } from 'react';
import './List.css';
import ListItems from './ListItems';
import LoadingComp from './LoadingComp';

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
                    {this.state.loading && <LoadingComp />}
                    {!this.state.loading && <ListItems posts={this.state.posts}/>}
            </div>
        )};  

    getPosts () {
        return fetch ('https://vast-tundra-92428.herokuapp.com/api/articles')
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
}

export default List;