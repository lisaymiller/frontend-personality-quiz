# Welcome to my frontend!

## How to run locally

Run `npm install` and `npm start` and you should be good to go!

## How to deploy

-Add your npm and node version to your `package.json` file like so:
⋅⋅⋅`"engines": { "node": "14.0.0", "npm": "6.14.4" }`

-Change your script methods in your `package.json` like so:
⋅⋅⋅`"scripts": { "dev": "react-scripts start", "start": "serve -s build", "build": "react-scripts build", "heroku-postbuild": "npm run build" }`

-When making your app to heroku, make sure you connect your github repo with your

CONTINUE
