import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Header from './Layout/Header';
import List from './Articles/List';
import Article from './Articles/Article';
import TopicArticles from './Topics/TopicArticles';
import Comment from './Comments/Comment';
import NoMatch from './Other/NoMatch';
import Profile from './Users/Profile';

class App extends Component {
  constructor(props) {
    super(props);
    this.state=({
      username:'northcoder'
    })
  }
  render() {
    return (
      <BrowserRouter>
        <div>
        <Header />
        <Switch className="container">
          <Route exact path="/" component={List} />
          <Route path="/:articleID/comments" component={Comment} />
          <Route path="/:articleID/article" component={Article} />
          <Route path="/topics/:topic/articles" component={TopicArticles} />
          <Route path="/users/:userID" component={Profile} />
          <Route default component={NoMatch}/>
        </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;