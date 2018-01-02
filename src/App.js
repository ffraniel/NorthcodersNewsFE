import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Header from './Header';
import List from './List';
import Article from './Article';
import TopicArticles from './TopicArticles';
import Comment from './Comment';
import NoMatch from './NoMatch';
import Profile from './Profile';
import Search from './Search';

class App extends React.Component {
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
        <Search />
        <Switch>
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