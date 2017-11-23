import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import './App.css';
import Header from './Header';
import List from './List';
import Article from './Article';
import TopicArticles from './TopicArticles';
import Comment from './Comment';
import Main from './Main';
import NoMatch from './NoMatch';
import Profile from './Profile';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state=({
      loggedIn:false
    })
  }
  render() {
    return (
      <BrowserRouter>
        <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/:articleID/comments" component={Comment} />
          <Route path="/:articleID/article" component={Article} />
          <Route path="/topics/:topic/articles" component={TopicArticles} />
          <Route default component={NoMatch}/>
          <Route path="/users/:userID" component={Profile} />
        </Switch>
        </div>

      </BrowserRouter>
    );
  }
}


export default App;
