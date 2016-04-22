# Angular Bluemix Seed with Active Deploy Service Plugin and Delivery Pipeline Service

## Try me
A simple Hello World Angular Seed application on Bluemix

Press this button, to get your own copy of the sample running in Bluemix! It clones the project, creates DevOps Services Project, generates multi-stage pipeline, deploys application to IBM Bluemix.

[![Deploy to Bluemix](https://bluemix.net/deploy/button.png)](https://bluemix.net/deploy?repository=https://hub.jazz.net/git/anderslangseth/angularBluemixSeed)


#Development Locally
## Install Dependencies
`npm install` for installing Node.js Dependencies.
`bower install` for installing Web Dependencies.

## Start the server & preview
Run `grunt serve` to create a local, Node-based http server on localhost:9000, and launch your newly scaffolded application in a new tab.
While running, each save to the source-code will automatically force a browser refresh so you don’t have to do this yourself (live reloading).

## Testing
Running `grunt test` will run the unit tests with karma, reporting to the console and to test/reports.

## Build
Running `grunt build` will create a production version of our application, by: linting, concatenating and minifying our scripts & styles, optimizing images, compiling the output of any preprocessors used, and save it in our dist folder.

## Build and preview the production-ready app
Running `grunt serve:dist` will create a production version of our application and launch it in a new tab.

## Test the production-ready app
Running `grunt test:dist` will run the unit tests with karma, reporting to the console and to test/reports.

## Build, Test and Preview the production-ready app
Running `grunt`. The default task will create a production version of our application, run the unit tests with karma and launch the production-ready app in a new tab.

## Delivery Pipeline Service
More notes about the Delivery Pipeline Service is located in the Application itself in the howTo-page, http://localhost:9000/#/howto
