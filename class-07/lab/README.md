# LAB: Bearer Authorization

Authentication Server Phase 2: Token (Bearer) Authentication

At this point, our `auth-server` is able to allow a user to create an account as well as to handle Basic Authentication (user provides a username + password). When a "good" login happens, the user is considered to be "authenticated" and our auth-server generates a JWT signed "Token" which is returned to the application

We will now be using that Token to re-authenticate users to shield access to any route that requires a valid login to access.

## Before you begin

Create a UML diagram of the authentication system on a whiteboard before you start

1. Refer to the *Getting Started* guide  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md)
1. Create a new repository called `bearer-auth`
1. Copy the files from within the `starter-code` folder of your class repository into your new repo as a starting point
1. Work in a new branch called `dev`, created from `main`
1. Following completion of this assignment, create a Pull Request from `dev` to `main` and merge your code
   - You will deploy from your `main` branch to a new app at Heroku
   - You will add a link to the PR that you merged in your README for grading purposes

## Business Requirements

Refer to the [Authentication System Overview](../../apps-and-libraries/auth-server/README.md) for a complete review of the application, including Business and Technical requirements along with the development roadmap.

## Phase 2 Requirements

In this phase, the new requirement is that any user that has successfully logged in using basic authentication (username and password) is able to continuously authenticate ... using a "token"

> **Note:** All previous requirements and user stories are still required. This Phase is intended to add functionality to our existing authentication server.

The following core requirements detail the functionality for this phase of the project.

### As a user, I want to obtain a token after I signin, so that I can re-authenticate

- Using a tool such as `httpie`, `postman`, or a web form:
  - Following a **POST** to `/signup` to create an account (or) Following a **POST** to `/signin` with basic authorization
    - Send a response to the client with the proper status code along with an object with the following properties

      ```JSON
      {
        user: {
          _id: 'ID FROM DB',
          username: 'myusername'
        },
        token: 'JWT Token Here'
      }
      ```

### As a user, I want to use my token to access routes that require a valid user

- Using `httpie` or `postman`, send a request to a "protected" route, such as `/secretstuff`
  - Your request must send an "Authorization" header, with the value of `Bearer TOKEN`
    - **TOKEN** is the token that you would have returned to the user after their signin step (above)
  - If the **TOKEN** is valid (i.e. if it represents an actual user)
    - The route should function as it normally would (sending a response)
  - If not
    - Send the user an error message stating "Invalid Login"

### As the website owner, I want our token system to be as secure as possible so that our users can feel safe when logging in

- Research ways to "secure" our JWT Tokens
- Implement one or more methods to secure our login tokens

## Technical Requirements / Notes

For this assignment, you'll need to deploy a server that supports the above requirements.

> You have been supplied an express server in the `starter-code` folder from which you must operate

### Task 1: Fix The Bugs

You will notice, by both attempting to start the server, as well as to run the tests ... this server is a bit bug-ridden. Before you can tackle the task of securing the tokens, you must first get the server running.

- Tests have been written for you. When they are all passing, you're mostly there
- Perform a manual validation of the server as well, so that you can be assured that you can interact with it as required

### Task 2: Secure the JWT Tokens

Implement any 2 of these security measures, or any other measure that you can think of or have researched. Use a configuration option for these (i.e. an env setting) so that your system can handle multiple authorization schemes and easily turn them off/on

- Some ideas:
  - Add support for the creation and usage of time sensitive (valid for 15 minutes) JWTs
  - Add support for the creation and usage of 'single-use' JWTs
    - With every authenticated access, re-send a new JWT token as a cookie or header
    - Disable those that you've already authenticated
  - Implement Sessions
    - Rather than store a user's information in the token, create a "session" with an "id"
      - On the server, store lookup information in a session model using that ID
      - Sessions should timeout or be invalidated in some automated fashion
  - Add an additional layer of encryption

### Testing

The tests are pre-written for you. Make sure they pass!

### Visual Validation

We have deployed a web application that's designed to test your Server. This is a good way to ensure that your system works as expected. There's nothing to "turn in" here, this is provided for your benefit.

- Open this [Web Application](https://javascript-401.netlify.app/)
  - Click the "AUTH / Bearer Auth" Link
  - In the form at the top of the page, enter the URL to your Authentication Server and all other relevant information
  - First login with a username and password
  - Then, assuming you see a button, click it to invoke the `/secret` route
  - If your lab is working, this app will show the content your secret route sends in the response

### Assignment Submission Instructions

Refer to the the [Submitting Express Server Lab Submission Instructions](../../../reference/submission-instructions/labs/express-servers.md) for the complete lab submission process and expectations
