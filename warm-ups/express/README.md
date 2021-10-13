# JavaScript 401 Warm-Up - Express

## Setup

- Work in a repository for this warmup exercise (`warmup-express`)
  - On each day, create a new folder and branch of this repo with the date
    - i.e. `YYYY-MM-DD`
  - Submit a PR from that branch to your master for review
  - If you are deploying to Heroku or Code Sandbox, provide that link as well
  - TimeBox this to 1 hour

## Warm-Up Exercise

**Before You Start** ... complete the [daily warm-up](../warmup-daily)

The goal for this exercise is to build up muscle memory on basic server setup and operations. You'll be tasked with creating servers many times during your career and in projects. This should be the type of thing that you can construct nearly blindfolded, to give yourself a stable starting point from which to do your actual work.

- Build an express web server. From Scratch. By Hand.
- Listens on `process.env.PORT`
- Serves static files from a folder called `./public`
- Has a separate `routes.js` file for serving custom routes
  - handles a GET on '/' with a simple response of 'hello'
  - handles a POST on '/save' with a JSON response containing the data posted to the server
- Handles 404's by serving the user a custom page (.ejs)
- Handles Errors by serving the user a custom page (.ejs)
  - log the actual error to the console
- Deploy to Heroku, via your master branch
- **After Class 08**
  - Write tests for each route, the 404 page, and a simulated error
    - Use supertest
  - Confirm tests passing with GitHub Actions, via your master branch

## Assignment Submission Instructions

Refer to the [warmup-instructions.md](../../../reference/submission-instructions/warmups) for the complete lab submission process and expectations
