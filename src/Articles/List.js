import React, { Component } from 'react';
import './List.css';
import ListItems from './ListItems';
import LoadingComp from '../Other/LoadingComp';

class List extends Component {
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
        return fetch ('http://localhost:3000/api/articles')
        .then((resBuffer)=>{
            return resBuffer.json();
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