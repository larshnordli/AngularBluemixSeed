# Angular Bluemix Seed with Active Deploy Service Plugin and Delivery Pipeline Service

## Prerequisites
The Delivery Pipeline Service on Bluemix is using Slack for notifications and Sauce Labs for e2e tests/Selenium integration or acceptance tests, therefore accounts and access keys/tokens is needed.

### Slack
Create an account on https://slack.com/
Generate OAuth Token https://api.slack.com/docs/oauth-test-tokens

### Sauce Labs
Create an account on https://saucelabs.com/
Get your Access Key https://saucelabs.com/beta/user-settings


Note: Access Key/OAuth Token and usernames will be needed in the setup of the application.

## Try me
A Angular Seed application on Bluemix, with a pre-configured Delivery Pipeline.
This app is a proof-of-concept, but also intended for quickly setting up Angular Prototypes.
Click the ***"Deploy to Bluemix""***-button and start developing your Angular app, with best-practices as project structure, unit-tests, e2e tests, deployment without downtime and rollback option.

Press this button, to get your own copy of the sample running in Bluemix! It clones the project, creates DevOps Services Project, generates multi-stage pipeline, deploys application to IBM Bluemix.

[![Deploy to Bluemix](https://bluemix.net/deploy/button.png)](https://bluemix.net/deploy?repository=https://github.com/langz/AngularBluemixSeed.git)

## Walkthrough
This simple pipeline demonstrates how active deploy capabilities can be used within Bluemix Delivery Pipeline services. Once you press the "Deploy to Bluemix" button and log in, you should see a set of steps run through:

Log in to IBM Bluemix DevOps Services/https://hub.jazz.net/:

![screenshot01](https://github.com/langz/ActiveDeployImages/blob/master/Image_01.png)

Fill in your **"APP NAME"**, **"REGION"**, **"ORGANIZATION"** & **"SPACE"**:

![screenshot02](https://github.com/langz/ActiveDeployImages/blob/master/Image_02.png)

Scroll down to fill in your **"SLACK API AUTHENTICATION"** & **"SLACK CHANNEL"**, **"SAUCE LABS USERNAME"** & **"ACCESS KEY"**, Then Click ***"DEPLOY"***:

![screenshot03](https://github.com/langz/ActiveDeployImages/blob/master/Image_03.png)

The "Deploying to Bluemix" stage will take approximately **5-10** minutes, so grab yourself a coffee, and wait :)
Once completed, you will see the following screen:

![screenshot04](https://github.com/langz/ActiveDeployImages/blob/master/Image_04.png)

You can see your app running by clicking ***"VIEW YOUR APP"***:
![screenshot05](https://github.com/langz/ActiveDeployImages/blob/master/HelloWorld.png)

Also, you can click on the ***"EDIT CODE"*** button to access your own copy of the repository and ***"BUILD & DEPLOY"*** in the upper right hand corner to see and configure your pipeline:

![screenshot06](https://github.com/langz/ActiveDeployImages/blob/master/EditCode.png)

Here you will see the Build & Deploy pipeline - full info on this awesome DevOps capability can be found [here](https://hub.jazz.net/docs/deploy/):

![screenshot07](https://github.com/langz/ActiveDeployImages/blob/master/Image_05.png)

  - Build stage
    - The first stage is the build stage, executing the command  `grunt build`, which will create a production version of our application, by: concatenating and minifying our scripts & styles, optimizing images, compiling the output of any preprocessors used, and save it in our dist folder.
  - Run Unit Test stage
    - The second stage is Unit Tests & Linting, executing the command `grunt test`, which runs the unit tests with karma and lints our code, reporting to the console and saving reports in test/reports/unit-tests.xml
  - Active Deploy stage
    - The third stage is where the Active Deploy magic happens. The first time this project runs runs, Active Deploy won't run yet - but it will deploy the application running properly that you can now use to run Active Deploy without downtime.
    - It will run e2e-tests, by executing the command `grunt e2e` which runs tests against your live application running in a real browser.
    - Deploys the app if the e2e-tests was successful. Otherwise, a rollback will occur and your app will revert to the original version.
    - The Active Deploy pipeline stage information is fully described [here] (https://hub.jazz.net/docs/deploy_ext/#activedeploy).

1. The first time you run this pipeline:
  - Deploys the app as a Cloud Foundry application to Bluemix
  - If you run `cf apps` from a command line, you will see this application running.
  - You can also see your deployments at dashboard @ console.ng.bluemix.net => Services => Active Deploy([here](https://activedeploy.ng.bluemix.net/deployments)).
  - You can look at the Bluemix console dashboard @ console.ng.bluemix.net to see your new application running:

![screenshot08](https://github.com/langz/ActiveDeployImages/blob/master/Image_06.png)


2. The second time you run the pipeline:
  - If you execute the build stage again with the little arrow, it will re-execute the build, create a new image, and then re-run the Active Deploy Stage. This actually runs the Active Deploy this time through.
  - You see your deployments at dashboard @ console.ng.bluemix.net => Services => Active Deploy([here](https://activedeploy.ng.bluemix.net/deployments)).
  - You can look at the Bluemix console dashboard @ console.ng.bluemix.net to see that you now have **two** applications running:
![screenshot09](https://github.com/langz/ActiveDeployImages/blob/master/Image_07.png)


You're Done!

That's it, you've now used the Delivery Pipeline Service on Bluemix to successfully setup an Angular app, which can be used as a starting point for your new app!

If you did not understand the whole Delivery Pipeline, don't worry, it is documented in more detail in the application you just launched, at http://appnameofyourchoice.mybluemix.net/#/deliveryPipeline:

![screenshot10](https://github.com/langz/ActiveDeployImages/blob/master/Image_08.png)

#Development Locally
## Fork the Git Repo from your IBM Bluemix DevOps Services
The Git Repo is automatically created after you have completed the process above, and the url to the repo can be found by clicking the ***"Cogwheel"*** in the upper right hand corner:

![screenshot11](https://github.com/langz/ActiveDeployImages/blob/master/EditCode.png)

You will then see the following screen with the GIT URL:

![screenshot12](https://github.com/langz/ActiveDeployImages/blob/master/Settings.png)

`git clone **Git URL**` to clone the repo, and get it locally,
ie `git clone https://hub.jazz.net/git/anderslangseth/AppnameOfYourChoice`

## Install Dependencies
`npm install` for installing Node.js Dependencies.
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
