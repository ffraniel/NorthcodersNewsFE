import React, { Component } from 'react';
import './ArticleComments.css';
import Search from './Search';
import LoadingComp from './LoadingComp';
import Comment from './Comment';

class ArticleComments extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            comments : this.props.comments,
            searchVal:'',
        })

    }
    // id: "5834129d5905f02e4c8e6e5d",
    // body: "Bepiha hocrem ruc pobdekmor va zet no neomo ludafi piw vowes sevjejsec uta sukar fe ni dafal ibekal. Mo goed zo ziwelbuk kid kuddodu pilweor mu gizidvag fa rarribva decajco ser lah. Sabgu pe uto tenodsa be suisje va zed lij gikru hur ohohujuj venul inseksu zasne ifegefida we uvabako. Dogun loifwa teviba celjis ijekoji hipikav ru pobe kolzompil caroto nowakbod fimomgu lo iz zak sotadag.",
    // belongs_to: "583412935905f02e4c8e6e06",
    // created_by: "grumpy19",
    // votes: 17,
    // created_at: 1479515865000,

    render(){
        return ( 
            <div className="commentsIterator">

            {this.state.comments.map((comment) => {            
                return (
                    <div className="commentEntry">
                    <div className="rankAndVote">
                        <a href="#"><p>up</p></a>
                        <p>{comment.votes}</p>
                        <a href="#"><p>down</p></a>
                    </div>
                    <div className="commentItem">
                        <p>Posted at {comment.created_at}</p>
                        <h2>{comment.body}</h2>
                        <h4>{comment.created_by}</h4>
                    </div>
                    </div>
               )
              })}
            </div>
        )
    }

}
export default ArticleComments;