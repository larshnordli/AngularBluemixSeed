# Angular Bluemix Seed with Frontend Tools and Delivery Pipeline Service

A Angular Seed application on Bluemix, with a pre-configured Delivery Pipeline.

## Prerequisites
1. **Log in to Bluemix and ensure that you are in the organization and space you wish to locate your app.**. There is no way to choose the organization or space in the Toolchain creation step, so this has to be done on beforehand
2. Ensure that you have at least one Toolchain space availble in your space
3. Ensure that your Bluemix account is connected to and authorized to control your GitHub account. *The Toolchain will automatically create a repository on your account*
4. Be aware that all GitHub repos that are made will automatically be made **public**. If you want to hide your code base, or if your working under a client agreement to keep information confidential, remember to change the newly created repo to public **before** your initial commit

## Get Started
A Angular Seed application on Bluemix, with a pre-configured Delivery Pipeline.
This app is a proof-of-concept, but also intended for quickly setting up Angular Prototypes.
Click the **Deploy to Bluemix**-button below and start developing your Angular app, with best-practices as project structure, unit-tests, e2e tests, deployment without downtime and rollback option.

Press this button, to get your own copy of the sample running in Bluemix! It clones the project, creates DevOps Services Project, generates multi-stage pipeline, deploys application to IBM Bluemix.

**Before you click this button**, read the Prerequisites. Also be aware that the name of your toolchain will be reflected in the app name and GitHub Repository that Bluemix creates for you.

[![Deploy to Bluemix](https://bluemix.net/deploy/button.png)](https://console.ng.bluemix.net/devops/setup/deploy/?repository=https://github.com/larshnordli/AngularBluemixSeed)

## Walkthrough
1. When you click the **Deploy to Bluemix**-button, you will be taken to Bluemix's Create Toolchain page. The name you choose here will be the name of several things:
  - The Toolchain  
  - The Delivery Pipeline within the toolchain
  - The App that is generated through the Pipelines
  - The GitHub Repo that is created on your own GitHub account

**Short note on app names:** You can choose to use whatever name you'd like, but if you're planning to use this as a frontend-app alongside a backend-app, it is recommended that you use the postfix `-frontend` and `-backend` for the apps respectively. If you for example are to create a new web app named "Aviator", a good naming convention would be to have the frontend apps *aviator-frontend* (*aviator-frontend-test* will be created for you), in addition to *aviator-backend* (*aviator-backend-test* will be created for you).

2. When you click the **Create** button in the Toolchain page, you will get an overview of the tools integrated into the Toolchain. Ensure that the GitHub tools and the Delivery Pipeline is Configured :heavy_check_mark:.
3. To monitor the progress of the app creation, click on the Delivery Pipeline box and monitor the stages. When all stages are successfully finished, two apps are created: **Test App** with the postfix `-test`, and a **Production App** without pre- or postfix that must be manually started. This is done by clicking the small Play-button on the top of the `Production Stage` stage. *The Deploy to Production stage is manual in case there are errors outside runtime, i.e., not caught by build or deploy jobs.*

**Note:** Altough two apps are created, only one repo is created.

----

#Development Locally
## Clone the Git Repo from your GitHub Repo created in the Toolchain

`git clone <Git URL>` to clone the repo, and get it locally,
ie `git clone https://github.com/GitHubUserName/AppName`

## Install Dependencies
`npm install` for installing Node.js Dependencies.

`npm install --global bower grunt-cli` for installing bower and grunt globally.

`bower install` for installing Web Dependencies.

## Start the server & preview
Run `grunt serve` to create a local, Node-based http server on localhost:9000, and launch your newly scaffolded application in a new tab.
While running, each save to the source-code will automatically force a browser refresh so you don’t have to do this yourself (live reloading).

## Testing
Running `grunt test` will run the unit tests with karma, reporting to the console and saving reports in test/reports/unit-tests.xml.

## E2E Testing
Running `grunt e2e` will run e2e tests against your application running in a real browser, interacting with it as a user would.
Running this command locally requires you to have the web application running locally, i.e 'grunt serve'.
Running it on Bluemix, in the Delivery Pipeline Service, will do the tests against your live application.

## Build
Running `grunt build` will create a production version of our application, by: linting, concatenating and minifying our scripts & styles, optimizing images, compiling the output of any preprocessors used, and save it in our dist folder.

## Build and preview the production-ready app
Running `grunt serve:dist` will create a production version of our application and launch it in a new tab.

## Test the production-ready app
Running `grunt test:dist` will run the unit tests with karma, reporting to the console and saving reports in test/reports/e2e-tests.xml.

## Build, Test and Preview the production-ready app
Running `grunt`. The default task will create a production version of our application, run the unit tests with karma and launch the production-ready app in a new tab.

## Delivery Pipeline Service
More notes about the Delivery Pipeline Service is located in the Application itself on the DeliveryPipeline-page, http://localhost:9000/#/howto

-------

##Toolchain Integration
The Delivery Pipeline Service on Bluemix is using Slack for notifications and Sauce Labs for e2e tests/Selenium integration or acceptance tests, therefore accounts and access keys/tokens is needed.

### Slack
Create an account on https://slack.com/
Generate OAuth Token https://api.slack.com/docs/oauth-test-tokens

### Sauce Labs
Create an account on https://saucelabs.com/
Get your Access Key https://saucelabs.com/beta/user-settings

Note: Access Key/OAuth Token and usernames will be needed in the setup of the application.
