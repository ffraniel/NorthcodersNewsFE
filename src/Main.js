import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import "./Main.css";
import Header from "./Header";
import List from "./List";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="home">
        <List />
      </div>
    );
  }
}

export default Main;
