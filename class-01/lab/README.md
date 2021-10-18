# LAB: Node Ecosystem, CI, CD

Time to get hands on with Node.js development! Today, you'll create and deploy a web server using CI and CD and get used to the general process of building and deploying servers, and prepping your work for grading

## The Setup

### Github

1. Create a new repository at GitHub, called `server-deployment-practice`
   - Select the "Add a README" option
   - Select the "Add a .gitignore" option, and choose Node.js
   - Opt for the MIT license
1. Clone this to your local machine.
1. Immediately create a "dev" branch to do your work in
   `git checkout -b dev`

### Heroku

At heroku, we're going to setup 2 deployments. One for your dev branch and one for your main branch. As you check in code, you should be able to see Heroku instantly deploy from GitHub, assuming your tests pass!

1. Login to your Heroku account
1. Create a new Heroku app, called `yourname-server-deploy-dev`
   1. Go to the deployment tab
   1. Choose "GitHub"
   1. Connect to your repository
   1. Choose the "dev" branch
   1. Choose the "Wait for CI to pass before deploy" option
   1. Choose the "enable automatic deploys" option
1. Create a new Heroku app, called `yourname-server-deploy-prod`
   1. Go to the deployment tab
   1. Choose "GitHub"
   1. Connect to your repository
   1. Choose the "master" or "main" branch
   1. Choose the "Wait for CI to pass before deploy" option
   1. Choose the "enable automatic deploys" option

### The Code

You've been provided a working demo server by your instructor. Get this code working locally. Note that while you are permitted to simply copy the files, it's better if you create the server from scratch, typing the lines of code in the demo provide. Build up your muscle memory

1. Initialize your app -- `npm init -y`
1. Install your dependencies -- `npm i dotconfig express jest`
1. Create the files and folders required for the application
1. Create the correct content in the files
1. Test your server -- `npm test`
   - You should see 100% of tests passing
1. Start your server -- `nodemon`
   - Visit <http://localhost:3000/data> in your browser to confirm that the server is visible

## Deploy!

Now that you have it all running, let's get it deployed.

### First: Deploy to Dev

1. Complete an **ACP** on your dev branch.
1. Go immediately to the repository on GitHub and open the actions tab
   - You should see your tests running
   - If they were passing on your local machine, they'll also pass here
1. Once your tests have passed, go to Heroku.com and look at your dev app's **Activity** tab, it should show you an active deployment
1. When it completes, go to the Heroku app URL and open your server in the browser, you should see the same results as you saw locally.

### Second, go to production

Once your dev run has completed, you have successfully deployed your application through github, with tests to an app on Heroku

Now, we're going to complete the "real" deployment process

1. Go to your repository on GitHub
1. Open a pull request from `dev` to `main`
1. If your tests are passing, you will be able to merge this branch
1. Once you merge, the tests will run again using GitHub actions
1. Once the tests pass, Heroku will deploy your "main" branch to your "production" app!
1. When that process completes, open your app in the browser to prove it.

## Document your work

1. Open up the README.md file in your editor. It should contain the notes your instructor provided during their demo
1. Change the URLs to point to your Heroku applications, your Github actions, and your pull request
1. Add your drawings and notes
1. ACP this to your dev, then master

### Assignment Submission Instructions

In Canvas, submit a link to your completed `README.md` file from the `dev` branch.  Your grader will make any notes to you in the PR itself.

 Refer to the the [Submitting Standard Node.js Lab Submission Instructions](../../../reference/submission-instructions/labs/node-apps.md) for a review of the complete lab submission process and expectations
