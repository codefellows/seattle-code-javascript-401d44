# Lab: AWS: API, Dynamo and Lambda

## Overview

Create a serverless REST API

## Feature Tasks & Requirements

Create a single resource REST API using a domain model of your choosing, constructed using AWS Cloud Services

- **Database**: DynamoDB
  - 1 Table required
- **Routing**: API Gateway
  - **POST**
  - `/people` - Given a JSON body, inserts a record into the database
  -  returns an object representing one record, by its id (##)
  - **GET**
    - `/people` - returns an array of objects representing the records in the database
    - `/people/##` - returns an object representing one record, by its id (##)
  - **PUT**
  - `/people/##` - Given a JSON body and an ID (##), updates a record in the database
  -  returns an object representing one record, by its id (##)
  - **DELETE**
  - `/people/##` - Given an id (##) removes the matching record from the database
  -  returns an empty object
- **CRUD Operation Handlers**: Lambda Functions

## Implementation Notes

Work in a non-main branch in a new repository called 'serverless-api'. While your code will all reside in a single repo, your functions will need to be individually .zipped and deployed using common libraries (node_modules) and schema files.

- Create one table for one data model at Dynamo DB
- Create a `Dynamoose` schema to define the structure of your table
- Write lambda functions that will separately perform the proper CRUD operation on the database
- Create your routes using API Gateway
  - Routes should integrate with the appropriate Lambda function to perform the operation

## Testing

Once you can assert the type of data coming back from Dynamoose and the type of input you'll get from the API in the `event`, write the test cases for each Lambda function

## Deployment

As a baseline, deployment should be done manually, with .zip files containing the required files, uploaded to each function.  As a stretch goal, you should endeavor to have your functions automatically deployed on all checkins to your `main` branch

## Stretch Goal

As it stands, your API routes and Lambda functions are tightly coupled. Can you architect a system where the API routes send in the data model as a parameter, and the lambda functions dynamically use the correct schema to handle the request?

For example,

GET `/{model}/{id}` should invoke a lambda function that knows how to switch the Dynamo table name to match the **model** parameter as well as to use the correct schema for that model name.

This could create a very dynamic system, that could handle any data model...


## Documentation

Provide a UML diagram showcasing the architecture of your API

Document the data and program flow for your API, including the mapping of Routes and Functions, as well as the flow of data.

- What is the root URL to your API?
- What are the routes?
- What inputs do they require?
- What output do they return?

## Submission Instructions

Submit a well written README.md in your repository following the above general guidelines

