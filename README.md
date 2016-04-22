# Angular Bluemix Seed with Active Deploy Service Plugin and Delivery Pipeline Service

## Try me
A simple Hello World Angular Seed application on Bluemix

Press this button, to get your own copy of the sample running in Bluemix! It clones the project, creates DevOps Services Project, generates multi-stage pipeline, deploys application to IBM Bluemix.

[![Deploy to Bluemix](https://bluemix.net/deploy/button.png)](https://bluemix.net/deploy?repository=https://hub.jazz.net/git/anderslangseth/angularBluemixSeed)

## Let's Get Started
This simple pipeline demonstrates how active deploy capabilities can be used within Bluemix Delivery Pipeline services. Once you press the "Deploy to Bluemix" button and log in, you should see a set of steps run through:

![screenshot01](https://github.com/IBM-Bluemix/active-deploy/blob/master/sample-apps/pipeline/images/01_login.PNG)
![screenshot02](https://github.com/IBM-Bluemix/active-deploy/blob/master/sample-apps/pipeline/images/02_deploy.PNG)

Once completed, you can see your app running by clicking **"VIEW YOUR APP"**:

![screenshot03](https://github.com/IBM-Bluemix/active-deploy/blob/master/sample-apps/pipeline/images/03_deployed2BM.PNG)
![screenshot04](https://github.com/IBM-Bluemix/active-deploy/blob/master/sample-apps/pipeline/images/04_viewYourApp.PNG)

Also, you can click on the ***"EDIT CODE"*** button to access your own copy of the repository and ***"BUILD & DEPLOY"*** in the upper right hand corner to see and configure your pipeline:

![screenshot05](https://github.com/IBM-Bluemix/active-deploy/blob/master/sample-apps/pipeline/images/05_editCode.PNG)
![screenshot06](https://github.com/IBM-Bluemix/active-deploy/blob/master/sample-apps/pipeline/images/06_buildAndDeploy.PNG)

Here you will see a Build & Deploy pipeline - full info on this awesome DevOps capability can be found [here](https://hub.jazz.net/docs/deploy/).

  - Build stage
    - The first stage is the build stage - that is the standard build stage in Bluemix - however you create your application image in a pipeline is what would be done here.
  - Deploy stage
    - The second stage is where the Active Deploy magic happens. The first time this project runs runs, Active Deploy won't run yet - but it will gave you a sample application running properly that you can now use to run Active Deploy to show you have the pipeline integration works. The Active Deploy pipeline stage information is fully described [here] (https://hub.jazz.net/docs/deploy_ext/#activedeploy).

1. The first time you run this pipeline:
  - Deploys the app as a Cloud Foundry application to Bluemix
  - If you run ```cf apps``` from a command line (the labs to help get you acquainted with the command line can be found [here](https://github.com/IBM-Bluemix/active-deploy/blob/master/labs/README.md)) you will see this application running:  

  ![screenshot07](https://github.com/IBM-Bluemix/active-deploy/blob/master/sample-apps/pipeline/images/07_firstRun.PNG)

  or something similar - this is your initial sample application. Or you can look at the Bluemix console dashboard @ console.ng.bluemix.net to see your new application running.

  ![screenshot18](https://github.com/IBM-Bluemix/active-deploy/blob/master/sample-apps/pipeline/images/18_dashboard1.PNG)

2. The second time you run the pipeline:
  - If you execute the build stage again with the little arrow, it will re-execute the build, create a new image, and then re-run the Active Deploy Stage. This actually runs the Active Deploy this time through.
  - You can see your deploy happening using these commands (adjusted for your results in command above):

  ![screenshot08](https://github.com/IBM-Bluemix/active-deploy/blob/master/sample-apps/pipeline/images/08_secondRun.PNG)

  Or you can look at the Active Deploy Console dashboard @ console.ng.bluemix.net => Services => Active Deploy.

  ![screenshot09](https://github.com/IBM-Bluemix/active-deploy/blob/master/sample-apps/pipeline/images/09_uiRunning.PNG)

You're Done!

![screenshot10](https://github.com/IBM-Bluemix/active-deploy/blob/master/sample-apps/pipeline/images/10_completed.PNG)
![screenshot11](https://github.com/IBM-Bluemix/active-deploy/blob/master/sample-apps/pipeline/images/11_uiCompleted.PNG)
![screenshot19](https://github.com/IBM-Bluemix/active-deploy/blob/master/sample-apps/pipeline/images/19_dashboard2.PNG)

That's it, you've now seen Active Deploy work in the Bluemix Build & Delivery Pipeline. The next step for you is to set it up in your own pipeline project.

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
