# Class 26: React Review / Hooks

## Announcements

* You will have to pass a whiteboard final
* We're going to start prepping a little more.

## Warm Up

Prompt: Create a function that can search for a word in a list of words sorted alphabetically, in a most efficient list.

## Component Based UI Review

React! omponents, front-end JS framework, Trees, parent and children (hierarchy), state.
  
* Library for creating atomic user interface components.
  * Atomic - the smallest amount of stuff required to do something.
    * component: what is the purpose, accomplish that goal and move on to another component.
* Library vs framework.
  * express => framework
  * React => library

### Re-Introduce React

* Boilerplate with `create-react-app`. npm package for creating React Apps quickly
* `node-sass` compiler for `.scss` sassy CSS.
  * SASS (Stylicly Awesome Style Sheets) : pre-compiled version of CSS
    * nesting style blocks
    * define variables and "partials"
    * keep things DRY.
* React uses JSX: the HTML looking javascript.

In 401 JS we will be using `functional` react components, why???
  * JS engine is more efficient when dealing with loads of functions rather than loads of constructors and the objects they instantiate.
  * Conversion to a function allows the engine to garbage collect better.
    * Better speeds for re-render, better space efficiency.
  * No more this (keeping track of what refers to is a little tricky in React).

## React Hooks

Functions that are designed to "hook" into the React API.

* This is a function design pattern (does not care about an encapsulated object).
  * Just a function that returns values, but if we use special functions given to us by react, we can mutate and re-render.
