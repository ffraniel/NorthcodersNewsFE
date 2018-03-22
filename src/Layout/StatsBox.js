import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import './StatsBox.css';
import Loading from '../Other/LoadingComp';

class StatsBox extends Component {
    constructor(props) {
        super(props);
        this.state=({
            numOfArticles:'',
            loading:true,
            posterOfTheDay:'',
            avatar:'data:image/jpeg;base64,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'
        });
        this.getArticles = this.getArticles.bind(this);
        this.getPosterOfTheDay = this.getPosterOfTheDay.bind(this);
    }
    componentDidMount() {
        this.getArticles();
        this.getPosterOfTheDay();
    }

    render () {
        return (
            <div className="statsBox">
                    <h4>Latest!</h4>
                    {this.state.loading && <Loading />}
                    {!this.state.loading && <p className="numOfArticles">There are {this.state.numOfArticles} articles on Saiddit.</p>}
                    {this.state.posterOfTheDay && 
                    <div className="posterDiv">
                        <p className="posterName">Today's poster of the day is </p>
                        <img className="posterImage" src={this.state.avatar} alt="profile of poster of the day" />
                        <NavLink  to={`/users/${this.state.posterOfTheDay.username}`}>
                            <p className="posterName">{this.state.posterOfTheDay.name}</p>
                        </NavLink>
                    </div>
                }
            </div>
        );
    }

    getArticles() {
        return fetch(
          `https://vast-tundra-92428.herokuapp.com/api/articles`
        )
          .then(resBuffer => {
            return resBuffer.json();
          })
          .then(res => {
              if(this.state.getPosterOfTheDay) {
                this.setState({
                    numOfArticles: res.articles.length,
                    loading:false
                  });
              }
              else {
                  this.setState({
                    numOfArticles: res.articles.length
                  });
              }
          })
          .catch((error) => {
            this.setState({
                errors:error,
                loading:false
            });
        });
    }

    getPosterOfTheDay() {
        return fetch(`https://vast-tundra-92428.herokuapp.com/api/users`)
        .then((resbuffer)=>{
            return resbuffer.json();
        })
        .then((res)=>{
            let randomNumber = Math.floor( Math.random() * res.users.length );
            let poster = res.users[randomNumber];
            if (poster.username === "happyamy2016" || poster.username === "cooljmessy" || poster.username === "weegembump") {
                poster.avatar_url = 'data:image/jpeg;base64,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';
            }
                this.setState({
                    loading:false,
                    posterOfTheDay:poster,
                    avatar:poster.avatar_url
                });
        })
        .catch((error) => {
            this.setState({
                errors:error,
                loading:false
            });
        });
    }
}

export default StatsBox;