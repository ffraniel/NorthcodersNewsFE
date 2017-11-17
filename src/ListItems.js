import React, { Component } from 'react';
import Listcss from './List.css';

class ListItem extends React.Component {
    constructor(props) {
        super(props)

        this.state = ({
            posts:this.props.posts
        })
    }
    render(){
        return ( 
            <div className="listEntry">
            {this.state.posts.map((post, index) => {            
                return (
                    <div className="listEntry">
                    <div className="rankAndVote">
                        <h1>{index + 1}</h1>
                        <a href="#"><p>up</p></a>
                        <p>{post.votes}</p>
                        <a href="#"><p>down</p></a>
                    </div>
                    <div className="listItem">
                        <a href="#">
                            <h2 className="artTitle">{post.title}</h2>
                        </a>
                        <p className="authoredBy">Submitted 6 hours ago by <a href="#">{post.created_by}</a></p>
                        <div className="listLinks">
                            <a href="#">
                                <p>{post.comments}</p>
                            </a>
                            <a href="#">
                                <p>share</p>
                            </a>
                            <a href="#">
                                <p>save</p>
                            </a>
                            <a href="#">
                                <p>hide</p>
                            </a>
                            <a href="#">
                                <p>report</p>
                            </a>
                        </div> 
                    </div>
                </div>
               )
              })}
            </div>
        )
    }
}
export default ListItem;