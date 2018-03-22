import React, { Component } from "react";
import "./Article.css";
import LoadingComp from "../Other/LoadingComp";
import ArticleText from "./ArticleText";
import CommentsUnderArticle from "../Comments/CommentsUnderArticle";
import PropTypes from 'prop-types';
import Error from '../Other/Error';

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: {},
      loadingArticles: true,
      loadingComments: true,
      comments: [],
      error:null
    };
    this.getArticles = this.getArticles.bind(this);
    this.getComments = this.getComments.bind(this);
  }
  componentDidMount() {
    this.getArticles();
    this.getComments();
  }

  render() {
    return (
      <div className="arti">
        {this.state.error && <Error error={this.state.error} />}
        {this.state.loading && <LoadingComp />}
        {!this.state.loadingArticles && (
          <ArticleText
            article={this.state.article}
            comments={this.state.comments}
          />
        )}
        {!this.state.loadingComments && (
          <CommentsUnderArticle
            comments={this.state.comments}
            articleID={this.props.match.params.articleID}
          />
        )}
      </div>
    );
  }
  getArticles() {
    return fetch(
      `https://vast-tundra-92428.herokuapp.com/api/articles/${this.props.match.params.articleID}`
    )
      .then(resBuffer => {
        return resBuffer.json();
      })
      .then(res => {
        this.setState({
          article: res.article,
          loadingArticles: false
        });
      })
      .catch((error)=>{
        this.setState({
            errors:error,
            loading:false
        });
    });
  }
  getComments() {
    return fetch(
      `https://vast-tundra-92428.herokuapp.com/api/articles/${
        this.props.match.params.articleID
      }/comments`
    )
      .then(resBuffer => {
        return resBuffer.json();
      })
      .then(res => {
        this.setState({
          comments: res.comments,
          loadingComments: false
        });
      })
      .catch((error)=>{
        this.setState({
            errors:error,
            loading:false
        });
    });
  }
}

Article.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
        articleID: PropTypes.string
    }).isRequired
  }).isRequired
};

export default Article;
