# Saiddit News: a Reddit News clone

It is currently deployed at https://sleepy-atoll-80436.herokuapp.com/.

Saiddit News is a Reddit News clone using React JS. It is being fed by a RESTful back end powered by Node JS, Express, and MongoDB (which can be found at https://vast-tundra-92428.herokuapp.com/). It is built in React JS (v16.1.1). Create-react-app was used to start the project. As such, it can deployed using the build script (this will be addressed in the deployment section below).

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system. You will need a back-end running to provide the JSON for us to render. To do so either use the currently deployed https://vast-tundra-92428.herokuapp.com/ version or go to https://github.com/ffraniel/BE-northcoders-news and follow the instructions to install the back end locally and run it. 

This React app runs on localhost:5000 to accommodate the back end running on localhost:3000. 

### Prerequisites

To check if npm is installed on your machine enter this command in you terminal window:

```npm -v```

If you do not have npm already installed please follow this guide to set it up --> https://www.npmjs.com/get-npm .

You will also need Git to be installed.

To check if git is installed on your machine please enter the following commitng in your terminal window:

```git --version```

If you do not already have git installed on your machine please follow this guide --> https://git-scm.com/ .


### Installing

To run this project you will need to clone it onto your local machine and install all dependencies.

To do so use the command line, navigate to your preferred directory on your local machine and enter the following command on the terminal window:

git clone https://github.com/ffraniel/NorthcodersNewsFE

Change directory into the folder and install all dependencies using the following command on your terminal window:

```npm install```

Once the depedencies are installed you can launch the app. It is currently configured to connect to my own RESTful api hosted on Heroku. Should you wish to change the back end it will be necessary to amend the api routes used by the various fetch methods in:

Article.js  
List.js  
RankAndVote.js  
ArticleComments.js  
Comment.js  
CommentsRankAndVote.js  
TopicArticles.js  
TopicStrap.js  
Profile.js  


### Running the App

To run the app open your terminal and type:

```npm start```

This will run the This will run the project on localhost:3000.  

### Deployment

This project was build with [Create-react-apps](https://github.com/facebook/create-react-app). As such deployment is handled by the build script. Just run:

```npm build```

The build compiles to a 'build' folder where all the code is minified and optimised. More details of which can be found on the link above. 

#### Other

[Github](https://github.com/) was used for versioning. 

**Francis Whitehead can be found at** - [Github](https://github.com/ffraniel/)