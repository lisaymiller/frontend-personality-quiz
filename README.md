# Welcome to my frontend!

This app is the front end to `https://github.com/lisaymiller/frontend-personality-quiz`, full application can be found [here](https://frontend-personality-quiz.herokuapp.com/)

## How to run locally

- Run `npm install` and `npm start` and you should be good to go!

## How to deploy

- Add your npm and node version to your `package.json` file like so:
  `"engines": { "node": "14.0.0", "npm": "6.14.4" }`

- Change your script methods in your `package.json` like so:
  `"scripts": { "dev": "react-scripts start", "start": "serve -s build", "build": "react-scripts build", "heroku-postbuild": "npm run build" }`

- Run `npm i serve` to install the server needed to deploy

- Make a new app in heroku, and make sure to choose Github as your deployment method, and link the repo you want to deploy, enable auto deploy and then deploy your branch

_If you get an error about react-scripts, try running `npm i react-scripts` then `npm start`_

#### Thats it!
