# Mid-Term Projects

## Core Requirements

- Use any, all, most, or none of what you learned ...
  - Make sure it works great
  - Make sure it's covered in tests
  - This should be a back-end project only
    - Your project may interface with a front-end that you did not build
  - Your may build a back-end for your final project (upon instructor approval)

### At your disposal

- Express Web Server with EJS
- Express Custom API Server
- Authentication, Authorization, RBAC
- Remote APIs
- SQL
- Mongo
- Socket.io
- ... or teach yourself something totally new this week!

## Project Ideas

- Slackbots
- Anything you can think of with a Raspberry Pi
  - Motion Detect
  - Camera
  - Environment
  - API Fetching
  - Automation
  - Make your own alexa
  - Make lights turn on based on music, weather, etc
- Service Connectors
  - Text me when I get an email from a certain person
  - Make a notesy to google sheets connection (add a row on every new note!)
- iOT
  - Send a text to open your garage door
  - Query the state of your garage door
- Re-Implement our authenticated API in an AWS Serverless Environment
  - Or in Azure
  - Or at Auth0
- Create an installable, downloadable `npm` package of value to other developers
  - Algorithms, OAuth, Queueing, etc.
  - Middleware
  - Helper Libraries or Utilities
- Any sort of automation tool for a student, instructor, or the school
  - Class Creator
  - Assignment Linter
- Github Tooling or Plugins
- Implement OAuth from the other side (be a provider)
- Live Action Text based games
  - Battleship, Tic-Tac-Toe
- Alexa Apps
- Dev-Ops style automation (deployments, aws configs, etc)
- Dockerizations
- AI or Machine Learning Utility

## Workflow

- To manage Tasks ...
  - Agile / Kanban Workflow
  - Project Management System
    - [Trello](https://trello.com/b/2GAur1IN/open-shelf-a-book-wiki?menu=filter&filter=label:Lab%2014)
    - [Github Projects](https://help.github.com/articles/about-project-boards/)
    - [Jira](https://www.atlassian.com/software/jira)
    - [Azure Boards](https://azure.microsoft.com/en-us/services/devops/boards/)

- To Manage and Deploy Code
  - SCM: Use the strict [Git Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)
  - Deployment:
    - Local dev/feature branches
      - One Branch Per Feature
    - Staging (Pre-Production) Branch
    - Master (Production) Branch
  - Developers work locally in feature branches
  - Check-in and merge PRs against `stage`
  - Deploy `stage` to a pre-production server (Heroku, AWS, or Azure)
  - Once verified, PR stage against master and deploy to production server
  - Protect master from direct check-ins
  - Only Leads (TAs) can merge from Stage to Master
  - Testing: Hook in GitHub Actions for live code testing
  - Automation: Automate your deployment from Stage and Master to your service of choice.

## Development Schedule

### Class 20 (Project Planning)

- Create your GitHub organization
  - Back-End Repo
  - Front-End Repo
  - Other Repo's for supporting services
- Deploy a simple "Hello World" server through your full pipeline
  - Stage and Production of all servers
  - Tests hooked up and passing
- Get your project board setup with your initial stories
  - At this stage, its's probably just stories to write more stories...
- Get your Wiki setup for documentation

### Class 21 (Project Start)

- Wireframes Complete
- User workflows finalized
- Initial design planned
- Code

### Class 22 (Core MVP)

- First MVP should be completed by EOD
- Your core functionality should be working end to end.
  - Databases Hooked up and saving
  - User workflow works (navigation, actions)

### Class 23 (Final MVP)

- Adding Non-Breaking Features
- Final "MVP" should be complete
  - Whatever you have by EOD should be presentation ready
  - Anything you add from this point on is purely additive.

### Class 24

- Final Polish
- Presentation Practice

### Class 25 (Presentation Day)

- Eat.
- Drink.
- Present.
- Win.

## Presentations

- Prepare a Powerpoint Style "deck" to present your project
- Slide 1: Team Name and Logo
- Slide 2: Summary of the project
- One slide for each team member.
  - Picture, 2-3 bullet points about you
  - Introduce yourself, touch on your role in the team, and present your personal pitch.
- Slide: Describe your problem domain in more bullet points
- Slide: Sell your solution
- Move to a stellar demo of the working application
- Show Your Tests
- Slide: Detail your workflow and process
- Slide: Highlight your wins
- Slide: Highlight areas for growth
- Questions and Answers

Why a deck? It's a helpful tool to keep you on time and on focus. Also, you will spend a lot of time in dev jobs speaking in front of a deck, so this is good practice for that. Know what's on screen behind you and prepare to speak in what appears to be an 'ad-hoc' fashion in front of it.

[Sample Presentation Deck](https://docs.google.com/presentation/d/1NeXKKEpjK2DDme8EwlZBsJndUqIgGYzWrY6FAYtNTf0/edit#slide=id.g2accd1c413_3_31)

## Tips and Tricks

- Solve a real business or community problem
- Deliver something desirable (make it rock!)
- Don't over-complicate. Sometimes, the simplest solution can be the most scalable and stable. Favor stability and tightness over wizardry
