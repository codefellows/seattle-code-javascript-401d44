# Class 03 - REST and SQL / sequelize

## Code Review

* Sarah: tests for middleware: `jest.fn()` => what the heck is this?
  * Couldn't close down tests?
    * Are you getting a response?  tests passing is our #1
    * app.listening? => tests should never touch our entry point.
* George: testing for 2 errors, but only 1 is passing.
  * Handling routes with status codes.
    * end the request and pass back a response with error.
    * set the status and call next.
* Justin: testing middleware, all tests pass / not sure the order of the 404 and the 500.
  * 2 seperate error events, but there share the same request pipeline.
* Antoine: lots of problem with the tests!

## SQL / sequelize

There are seperate "dialects" these have different syntax requirements, and data types.
  * We are using the Postges dialect
    * mySQL
    * sqlite (in memory, we don't need to spin up any database).
    * elephantSQL

### Data Modeling

SQL is tabular data, how can we think about our app as a collection of tables wirh rows and columns?

### Implementation with Sequelize

How do we tell JS to perfrom action on our Tabular data?

* Sequlize is an ORM: object relational mapper
  * maps our javascript code, to statements tha SQL can fulfill.
  * Creates an instrance of a SQL database connection, and let's us perform operations on it's model / tables.
  * Works very similarly to Mongoose, at the end of the day we are still Creating / Reading / Updating / Deleting.

## RESTful Web Service
