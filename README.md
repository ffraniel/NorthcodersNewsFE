# Saiddit News: a Reddit News clone

It is currently deployed at https://sleepy-atoll-80436.herokuapp.com/.

Saiddit News is a Reddit News clone using React JS. It is being fed by a RESTful back end powered by Node JS, Express, and MongoDB (which can be found at https://vast-tundra-92428.herokuapp.com/). It is built in React JS (v16.1.1).

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

To check if npm is installed on your machine enter this command in you terminal window:

npm -v

If you do not have npm already installed please follow this guide to set it up --> https://www.npmjs.com/get-npm .

You will also need Git to be installed.

To check if git is installed on your machine please enter the following commitng in your terminal window:

git --version

If you do not already have git installed on your machine please follow this guide --> https://git-scm.com/ .


### Installing

To run this project you will need to clone it onto your local machine and install all dependencies.

To do so use the command line, navigate to your preferred directory on your local machine and enter the following command on the terminal window:

git clone https://github.com/ffraniel/NorthcodersNewsFE

Change directory into the folder and install all dependencies using the following command on your terminal window:

npm install

Once the depedencies are installed you can launch the app. It is currently configured to connect to my own RESTful api. Should you wish to change the back end it will be necessary to amend the api routes in:

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

npm start

This will run the server on port 3000. All endpoints can be found locally on http://localhost:3000 .

```
## Examples
```
Now when we navigate to http://localhost:3000
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc
