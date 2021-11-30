# Advanced State with Reducers

**RESTy Phase 4:** Track History

## Before you begin

Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

> Continue working in your 'resty' repository, in a branch called 'reducer-hook'

## Business Requirements

Refer to the [RESTy System Overview](../../apps-and-libraries/resty/README.md) for a complete review of the application, including Business and Technical requirements along with the development roadmap.

## Phase 4 Requirements

In phase 4, we will be tracking every API call and storing it in history

The following user stories detail the major functionality for this phase of the project.

- As a user, I want to see a list of my previous API calls, so that I can see the results again, quickly

Application Flow:

- User enters an API URL
- Chooses a REST Method
- Clicks the  "Go" button
- Application fetches data from the URL given, with the method specified
- Application stores the API request and returned data into state
  - Updates the list of previous API calls
- Application Displays the response headers and results separately
  - Both headers and results should be "pretty printed" JSON

> One possible design/layout. Please use your judgement and taste in styling your version of this application.

![Resty](resty.png)

## Technical Requirements / Note

> Refactor your state management within the App component to use the `useReducer` hook.

1. Replace any component state managements to use derived state from `useReducer` with a reducer function and intitial state.

Suggested approach

- `<App />`: Use a reducer to store and manage all application state: loading, results, history
  - Add to history array in state after every api call
    - method, url, results (json)
- `<History />`: Iterates the history array in state and shows the previous API calls
  - When one is clicked on, show the results in the results component
    - Note: the results component renders whatever is in state ...

## Tests

- Install the React Testing Library framework.
- Assert that upon submitting the form will result in data being rendered in the output area.
- You will need to "mock" the API request with React Testing Library.
  - Note the example here: <https://testing-library.com/docs/react-testing-library/example-intro/>
    - This shows how to use the `msw` package to setup a fake server that returns fake data in your tests so that you can run tests without having to call an actual API.

## Deployment

Deploy your application to GitHub pages using a GitHub action which will publish the "build" to the `gh-pages` branch of your repository on all check-ins

## Stretch Goals

- Store the history in local storage as well as in state
- When the application loads, use an effect to read from local storage and put that history into your state right away

## Assignment Submission Instructions

Refer to the the [Submitting React Apps Lab Submission Instructions](../../../reference/submission-instructions/labs/react-apps.md) for the complete lab submission process and expectations
