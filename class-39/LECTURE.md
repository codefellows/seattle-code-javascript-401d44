# Class 39: Redux Toolkit

## Announcements

* This is our last week! and we have a lot to cover
  * But not a whole lot of labs
  * This week is catch up, whiteboard prep.
  * This Wednesday expect for some folks to be whiteboarding!
    * default scheduling is between 2 and 6 weekdays.
    * When an instructor schedule your I will message you ASAP.
* Schedule:
  * Monday: Finishing Redux
  * Tuesday CCW 6 in the morning
    * in the afternoon we have an Intro to React Native
  * Wednesday: finishing React Native, main topic is up to you.
    * Please DM with your choice.
      * Typescript
      * Graph QL
      * Babel - Webpack. (Using React without create-react-app)
      * JAM Stack (JavaScript / APIs / Markup)
        * Next / Gatsby.

## Warm Up

Voluteer for a whiteboard!!

Prompt:  `Write a function that takes in a string, s, of repeating characters that is repeated infinitly, and an integer, n.  Find and print all the occurences of the letter "a" in the first n characters of the string.`

## Code Review

Add data to the Postgres database:

* Seeding the database. Storefront Products and Categories - Customer (Average User of our app).
  * This is a job of a seperate client (Store owner facing).
  * Bahavior.
  * Seeding the db for testing.
* For the purpose of the lab -> getting a list of products and categories, we don't need to worry about User roles (out of scope).
  * We do have an unauthenticated POST route to both Products and categories.
    * Onload of the App components, fetch products and categorties, if non are there make a couple posts.

Job Ready React Review:

What are the advantages of using the React Library?

* Create Single Page applications using javascript!
* Fast and efficient application (no reloading a whole bunch of HTML / JavaScript).
* Utilizes the concept of state. (does state belong to a component????)
* Component Based architecture (cleam keeping things isolated, reusable, modular, scalable).
  * Works well with other frameworks (angular, vue).

What are some disadvantages of using React?

* Vendor lock in, strapped into facebook.  Wrap them up in js logic to de-couple them.
* Cumbersome library, a lot to configure, and a ton of dependencies to install and run.
* State managment can be a real pain!
* SEO is big pain in the butt, for a virtual DOM.
  * Typically react renders components dynamically.
  * You can get better SEO, with more contemporary framworks (next / Gastby).

What is application state?

* Temporary data used to build your app (provide a way to render data).
  * It can change, but belongs to a specific client!!!!!
* Conduit to the users information / not necessarily react but more the front end.
  * React is not application state / application state doesn't mean component data.

What is the difference between React and Redux?

* Redux is state managment library, using a store (a big object).
* React has it's state management management, but it's main concern is components.
  * Redux can be used outside.

Why use Redux instead of Component State or Context?

* Context requires a lot of wrapping components.
* As our app scales it becomes harder to manage application state / context, easier for redux.
* Instead of having multiple components / providers, our app gets one source of truth.
* Seperation of concerns
  * Want to manage you data => Redux
  * Want to manage components => React

## Redux Toolkit

Setting up Redux is a little bit weird, but for good reason -> unopinionated, there is no right way to use redux, just a few things that are required

* Reducer: a function that returns a new state.
* Actions: objects with a type and a payload.

Redux toolkit is very opinionated, and gives you a declaritive syntax (nothing infered from the syntax).

* Works more like object oriented programming rather than Redux's functional syntax.
* Written to satidfy the use cases that most people use redux.
* It has qulity of life libraries built directly in.
  * No installing and configuring redux-thunk.
  * No installing and configurint redux-devtools-extension.
