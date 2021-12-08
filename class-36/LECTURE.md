# Class 36: Application State with Redux

## Announcements

* Instructor synch for part 2 of the course.
  * Make sure to fill out assignment.
* Career Coaching Worshop 6 next Tuesday.
* Continuing work on the API Integration Server
  * Creating issues for the server (if you want I can assign).

## Warm Up

Whitboard Challenge given verbally:

`You're helping a software team create a web service that can track Votes for Candidates.  The web service needs to use HTTP and should persist votes coming in from a large number of clients. Each client should be able to send a request containing an ID of a Candidate and the service should be able to add that vote to the Candidates total number of votes.  How would Implement this service?`

## State Management with Redux

What is Redux?

* A library that manages state?
  * It creates a global `store` - which is very much like the Context Provider `values`
* Actions / Reducers / Initial.
* Meant to handle really large application state objects.
  * A little bit of added configuration complexity.
* Very functional
  * currying
  * combing values is some new ways.
* What is a reducer?
  * a function, that returns a new version of state.
* What about actions?
  * object: { type, payload }
  * action creators: function that return an action.
  * Reducer responds directly to action that are `dispatched`
* What is dispatch / to be dispatched?
  * this is a function,  that pushes things into the reducer.
  `const [state, dispatch] = useReducer(reducer, initialState`;
* How do Providers and Consumers work?
  * Providers: Component high up in the component Tree, can send things down the tree to a child component.
  * Consumers: A child component of the Provider, consumes anything that Provider adds to it set of values / behaviors, opt-in.
    * Redux uses a connect function for children to opt-in.

## Implementation
