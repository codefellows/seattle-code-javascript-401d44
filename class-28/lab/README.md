# LAB - Component Lifecycle / `useEffect()` Hook

**RESTy Phase 3:** Connect RESTy with APIs, running live requests

## Before you begin

Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

> Continue working in your 'resty' repository, in a branch called 'effect-hook'

## Business Requirements

Refer to the [RESTy System Overview](../../apps-and-libraries/resty/README.md) for a complete review of the application, including Business and Technical requirements along with the development roadmap.

## Phase 3 Requirements

In phase 3, we will be connecting RESTy to live APIs, fetching and displaying remote data. Our primary focus will be to service *GET* requests

The following user stories detail the major functionality for this phase of the project.

- As a user, I want to enter the URL to an API and issue a GET request so that I can retrieve it's data
- As a user, I want to see the results returned from an API request in my browser in a readable format

Application Flow:

- User enters an API URL
- Chooses a REST Method
- Clicks the  "Go" button
- Application fetches data from the URL given, with the method specified
- Displays the response headers and results separately
- Both headers and results should be "pretty printed" JSON

> One possible design/layout. Please use your judgement and taste in styling your version of this application.

![Resty](resty.png)

## Technical Requirements / Note

> Extend your application to include the ability to send http requests and display response data, when the `Form` experiences a submission event.

1. Refactor application methods to allow for browser side HTTP requests to be sent.
   - Your implementation should allow the user to set a url, method, and request body.
1. Make sure all relavent request and response data is displayed to the User.

Suggested approach

- `<Form />` component, `onSubmit()` sends the user's entries to the `<App />` via method sent in through props
- `<App />` does a check on the request data from the form and updates the request variable in state with the `url`, `method`, and potentially the `body`
- `<App />` has an effect hook that's looking for changes to the request variable in state, and in response, runs the API request with the new request options from state
- `<App />` updates state with the results of the API Request
- `<Results />` sees the new API data as a prop and renders the JSON

Note: update your `<Results />` component to use a 3rd party component to "pretty print" the JSON in a color-coded, user-friendly format

## Tests

- Install the React Testing Library framework
- Assert that upon submitting the form will result in data being rendered in the output area
- You will need to "mock" the API request with React Testing Library
  - Note the example here: <https://testing-library.com/docs/react-testing-library/example-intro/>
    - This shows how to use the `msw` package to setup a fake server that returns fake data in your tests so that you can run tests without having to call an actual API

## Deployment

Deploy your application to GitHub pages using a GitHub action which will publish the "build" to the `gh-pages` branch of your repository on all check-ins

## Stretch Goals

Add support for all REST methods

- **GET** a single record by ID
- **DELETE** a single record by ID
- **PUT** a single record by ID
  - Requires the addition of a text area where you can type in the JSON body for the update
- **POST** to create a new record
  - Requires the addition of a text area where you can type in the JSON body for the new record

## Assignment Submission Instructions

Refer to the the [Submitting React Apps Lab Submission Instructions](../../../reference/submission-instructions/labs/react-apps.md) for the complete lab submission process and expectations
