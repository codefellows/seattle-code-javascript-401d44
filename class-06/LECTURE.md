# Class 06: Authentication (a little Authorization)

## Announcements

* There's a lack of TAs / not getting enough help in lab time.
  * Our Java TAs all got jobs.
  * Office hours from 4:00 - 6:00 PM (accept for Friday.)
    * I'm going to be going around Remo.
    * I'm going to start blocking off my jacobknaack.youcanbook.me
* Struggling with what to build.
  * There is a lot of abstraction on the job
  * There is a lot of googling.
* Not enough testing in Demos.
  * There will be some demonstration of new testing methodologies.
  * There's not enough time to TDD everything.
  * Don't let testing slow you down (don't prioritize).
* Liking the review sessions / demenstrations / engaging exercies / TAs.
* Labs / learning journals will be due at 9:00 AM PST before the next class.

## Warm Up

Whiteboard challenge:  Swaping 2 nodes in a linked list.

## Code Review

* Express Server Routing
  * Middleware: A function with a `next` parameter / `error` parameter.
    * Next: if we need to move to another function in the pipeline, we need to call `next()`.
    * Error: an optional parameter, that triggers error handling middleare when passed into the `next` function.
  * Fires off during the request pipeline.  (between the request and the response)
* Sequelize Data Modeling:
  * What does our Server need in order to perfrom CRUD with seqeulize?
    * Define A Model (schema) for sequelize => Table / columns and rows.
    * Connection string, pointing to a service that is runnning some database(SQL) software(Postgres / sqlite / mySQL).
    * We need a database to connect our models (tables) to.

Breakout Room Time!
* As a small team: build a single resource RESTful CRUD server.
  * Split into 2 pairs/triplets in each team, 1 team to configure the routes, another to configure the database, suggestion start with tests.

## Authentication

Today we are restricting those resources to user we already know.
* "Who are you?"
  * Can you tell me who you are, and can I validate that.
  * not "are you allowed to do something" - Authorization.

## Encoding and Encryption

Authentication HTTP requests with headers.
* Credentials are encoded: taking an input and stadardizing it (of whatever purpose), allow wierd passwords to be read by our machine.
* Encryption:  is the hiding of information, making it harder to read.
  * the only way to validate a string as a password is to re-encryupt it and compare (one way).

## Building Basic Authentication System

