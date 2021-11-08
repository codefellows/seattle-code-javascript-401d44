# Lab: AWS: Cloud Servers

## Overview

Deploy a Node.js server to AWS EC2

## Resources

## Feature Tasks

Deploy a simple Node.js server to EC2, using Elastic Beanstalk

- Choose a server you've built previously
  - Option 1: A simple API or Web Server
  - Option 2: A socket.io event Hub
  - The server **should not** require a database
  - Check in your server to GitHub

**Task 1:**

- Create a new environment, using Elastic Beanstalk from the AWS Control Panel (GUI)
- Manually deploy your application to this environment by uploading a .zip file

**Task 2:**

- Using the same server, create a new environment using Elastic Beanstalk from your terminal
- Manually deploy your application to this environment by using `eb deploy`

## Documentation

- In your `README.md` include:
  - The links to both of your deployed servers (GUI deploy and CLI deploy)
  - Document your processes

## Stretch Goal

- Automatically deploy your app to either (or both) environments on check-ins to your main branch using a github action
- HINT: Explore the GitHub marketplace

## Submission Instructions

- Create a new repository for your server, called 'cloud-server'
- Work on a non-main branch and make commits appropriately.
- Update your README.md file with the required documentation above.
- Create a pull request to your master branch with your work for this lab.
- Submit the link to that pull request on Canvas.
