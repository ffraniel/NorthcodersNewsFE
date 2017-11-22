import React, { Component } from 'react';
import './ArticleText.css';

class ArticleText extends React.Component {
    constructor(props){
        super(props);
    }
    render (){
        return (
            <div>
            {/* {this.props.articles.map((article)=>{
                return (
                    <div className="articleBox">
                    <div className="rankAndVote">
                      <a href="#">
                        <p>up</p>
                      </a>
                      <p>{article.votes}</p>
                      <a href="#">
                        <p>down</p>
                      </a>
                    </div>
                    <div className="articleBody">
                      <p>{article.body}</p>
                      <a href="#" className="authoredBy">
                        <h4>Submitted 10 hours ago by {article.created_by}</h4>
                      </a>
                      <div className="listLinks">
                        <a href="#">
                          <p>permalink</p>
                        </a>
                        <a href="#">
                          <p>embed</p>
                        </a>
                        <a href="#">
                          <p>save</p>
                        </a>
                        <a href="#">
                          <p>report</p>
                        </a>
                        <a href="#">
                          <p>reply</p>
                        </a>
                      </div>
                    </div>
                  </div>
                )
            })} */}
            <h1>this should have props</h1>
            </div>
        )
    }
}

export default ArticleText;