# AWS: API, Dynamo and Lambda

Mirroring our previous efforts in Express, today, we will be wiring up a completely serverless, let fully functional, CRUD-Enabled API.

## Learning Objectives

### Students will be able to

#### Describe and Define

- AWS API Gateway
- How to trigger Lambda Functions in response to an API request
- The differences between HTTP and REST APIs at AWS
- The differences between DynamoDB and Mongo

#### Execute

- Creation of a DynamoDB Table
- Creation of a Lambda function that can operate on a DynamoDB Table
- Usage of Dynamoose in a NodeJS Lambda Function

## Today's Outline

<!-- To Be Completed By Instructor -->

## Notes

Creating a serverless API: Checklist

- [ ] IAM User role with access to Lambda and DynamoDB Full Access
- [ ] Dynamo DB Table Created
- [ ] Lambda function(s) that use Dynamoose to attach to the table
  - [ ] Created with the correct IAM Role (Step 1)
- [ ] API Endpoints that all the appropriate functions for each action type

### Creating a Dynamo DB Table at AWS

1. Open the DynamoDB Dashboard
1. Choose `Create Table`
1. Name your table
1. Choose a field name to use as primary key
   - Generally, "id", and you'll need to supply this when you add records

### Working with Dynamo from Node

When writing code that connects to a Dynamo Database, you'll need to know your AWS credentials and install `dynamoose` as a dependency

<https://dynamoosejs.com/getting_started/Introduction>

#### Create a Schema with Dynamoose

This is just like Mongoose!

```javascript
'use strict';

const dynamoose = require('dynamoose');

const friendsSchema = new dynamoose.Schema({
  'id': String,
  'name': String,
  'phone': String,
});

module.exports = dynamoose.model('friends', friendsSchema);
```

#### Write your Lambda Function (or any JS) to use your schema...

> Be sure your Lambda function has full permissions for API Gateway, DynamoDB, and Cloudwatch

The actul schema and CRUD ops are very similar Mongoose and Mongo

```javascript
const contentModel = require('./friends.schema.js');

async function findRecord(id) {
  const content = await contentModel.query("id").eq(id).exec();
  console.log(content[0]);
}

async function saveRecord(name, phone) {
  const id = uuid();
  const record = new contentModel({ id, name, phone });
  const data = await record.save();
  console.log(data);
}

```

### Create API Endpoints

1. At API Gateway, create a new HTTP API
1. Identify "Integrations" which is one or more of your Lambda functions (above)
1. Once created, define a route endpoint for each REST method
1. Connect each endpoint to the correct lambda

As your routes are invoked by users, those lambda's will fire, with the `event` receiving any POST or QUERY data
