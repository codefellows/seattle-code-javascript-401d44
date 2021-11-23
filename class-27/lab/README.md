# LAB - `useState()` Hook

**RESTy Phase 2:** Retrieving User Input and Managing State

## Before you begin

Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

> Continue working in your 'resty' repository, extending your previous work in a new branch called 'state'

## Business Requirements

Refer to the [RESTy System Overview](../../apps-and-libraries/resty/README.md) for a complete review of the application, including Business and Technical requirements along with the development roadmap.

## Phase 2 Requirements

In phase 2, we will be receiving user input in preparation of connecting to live APIs, using the `useState()` hook in our functional components

The following user stories detail the major functionality for this phase of the project.

- As a user, I want to enter the REST Method and URL to an API
- As a user, I want to see a summary of my request as well as results returned from an API request in my browser in a readable format

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

> Extend your React Application so that your functional components are able to manage their own state variables using the `useState` Hook.  
> NOTE: It is not a requirement to make the actual API call. That can be mocked with "fake" data

1. Refactor any components using `this.setState` to implement the `useState` react API hook.
1. Refactor the Form Component to implement user input from form elements, instead of hard coded string values.

Suggested Component Hierarchy and Application Architecture:

- `index.js` - Entry Point
- `App.js` - Container
  - Holds application state: The Request (from the form) and the Response (from the API)
  - A class method that can update state
  - Renders 2 Child Components
- `<Form />`
  - Expects a function to be sent to it as a prop
  - Renders a URL entry form
  - A selection of REST methods to choose from ("get" should be the default)
    - The active selection should be displayed/styled differently than the others
  - Renders a Textarea to allow the user to type in a JSON object for a POST or PUT request
  - On submit
    - Send the Form entries back to the `<App>` using the method sent down in props
    - Form will run the API request
      - Toggle the "loading" status before and after the request
- `<Results />`
  - Conditionally renders "Loading" or the data depending on the status of the request
  - Expects the count, headers, results to be sent in as props
  - Renders the count
  - Renders the Result Headers as "pretty" JSON
  - Renders the Result Body as "pretty" JSON

## Tests

- Install the React Testing Library framework
- Assert that upon submitting the form will result in data being rendered in the output area
- Install the GitHub action that will auto-run your tests on all check-ins

## Deployment

Deploy your application to GitHub pages using a GitHub action which will publish the "build" to the `gh-pages` branch of your repository on all check-ins

## Stretch Goals

Connect the App component to an API and make an actual call (focusing on GET) to the URL requested in the form

## Assignment Submission Instructions

Refer to the the [Submitting React Apps Lab Submission Instructions](../../../reference/submission-instructions/labs/react-apps.md) for the complete lab submission process and expectations
