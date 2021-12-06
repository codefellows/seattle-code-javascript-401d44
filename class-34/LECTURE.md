# Class 34 - API Integration

## Announcements

Feedback

* People have become unmotivated.
  * Same stuff from 301, things are feeling reviewy.
  * I would love to get in more in-depth:
    * babel / webpack.
* Lack of feedback on labs:
  * Can we get more comments / feedback for lab submisssions.
* We aren't getting our rubber ducks / people to talk to about labs.
  * Office hours have been tight, I'll try and keep a 15 minute limit.
* So much work in a 24 hour period of time.
  * Productivity will be lower if we are in it all the time.
  * Quality - Does it work??
* Microsoft and Amazon:
  * The expectation:
    * Produce work everyday.
    * Good fundamentals
      * Abstract problem solving.
      * Design patterns (dsa / async).
      * More than basic grasp of a language.
  * Out of scope:
    * Deep knowledge of a specific framework:
      * express
      * react
      * node
* Christopher Burk: 
  * can we get another hour.
  * Can we get more explanations and clarity to the lecture lab combo.
    * We want people to use their abstract problem skills / self research and learning habits.

Whiteboard finals begin in 1 week:

## Warm Up

Traverse a linked list of integers, return the total number of matching pairs of integers in the list.

input: [1] -> [2] -> [3] -> [3] -> [2] -> [5]
output: 2

## Code Review

* Auth Context and Login Components
  * Context:
    * isLoggedIn
    * User
    * isAuthorized / can
  * Login Form
  * Auth Component

* Sarah: `user?.capabilities` - optional chaining operator, checks for properties on an object that may of may not exist.

## API Integration

Let's break up into groups to create an server that can integrate into our React Auth Components: https://github.com/codefellows/api-integration-server
