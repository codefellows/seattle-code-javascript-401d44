# Class 18: API Gateway => Lambda => Dynamo DB

## Code Review

* Access denied responses
  * Lambda !=> s3
    * images.json is full of junk.
    * makes a new policy for s3.
      * There are many ways to give "things" access on AWS.
* Lambda function structure.

## API Gateway / Lambda

We've already programmed our own REST API, so all the technologies still apply

* HTTP reqeests to some endpoint.
* Gateway just exposed endpoints.
  * Given a HTTP Method and route, do something.
  * For each route we add to our Gateway we will specify a lambda.

When configuring your route to run a specific lambda: MAKE SURE YOU CHECK `proxy request`.

## Dynamo DB

No SQL database -> there are no tables and explicit relationships.

This database perfroms incredibly well!

[Whiteboard](https://projects.invisionapp.com/freehand/document/gn8jhcHdR)
