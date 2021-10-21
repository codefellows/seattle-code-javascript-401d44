# LAB: Data Modeling

Dynamic API Phase 3: Add Database Abstraction and Associations to your API

> Today's lab adds no new requirements to the API server. Our goal today is to swap out the route handler functions in favor of a Collection Interface which will consume a Sequelize Model and perform generic Database CRUD operations. You should consider this a "refactor" of your previous assignment, but treat this as a new build -- do not simply copy your previous files and start working. Rebuild the server, re-asserting your knowledge of how it works, how it's architected, and how to operate it.

## Before you begin

1. Refer to the *Getting Started* guide  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md)
1. Create a new repository called `api-server`
1. Work in a new branch called `dev`, created from `main`
1. Following completion of this assignment, create a Pull Request from `dev` to `main` and merge your code
   - You will deploy from your `main` branch to a new app at Heroku
   - You will add a link to the PR that you merged in your README for grading purposes

> Note: You should have a working express server from previous assignments. Use this as your reference. Today's lab will have you replicating 100% of the functionality, but using the Collection Class instead of Sequelize Models directly. Resist the urge to copy your previous work and use it as a starting point. Rather, re-type the code from your working server, seeking to understand how it works and how it wires up. Then, approach the lab requirements below, which are principally focused on changing route handlers.

## Phase 3 Requirements

Build a REST API using Express, by creating a proper series of endpoints that perform CRUD operations on a **Postgres SQL Database**, using the REST standard

### Data Models

- Create 2 SQL data models using Sequelize, exported as Node Modules
- Create a Collection Class that accepts a Sequelize Model into the constructor and assigns it as `this.model`
  - This class should have the following methods defined, to perform CRUD Operations
    - Each method should in turn call the appropriate Sequelize method for the model
    - `create()`
    - `get()` or `read()`
    - `update()`
    - `delete()`

> For the data models, you are free to choose your own data types and describe their fields ... For Example: person, animal, car, instrument, game

### Routes

In your express server, create a router module for each data model that you've created. Within the router module, create REST route handlers for each of the REST Methods that properly calls the correct CRUD method from the matching data model.

> For these examples, we'll use 'food`

#### Add a Record

- CRUD Operation: Create
- REST Method: POST
- Path: /food
- Input: JSON Object in the Request Body
- Returns: The record that was added to the database.
  - You must generate an ID and attach it to the object.
  - You should verify that only the fields you define get saved as a record.

#### Get All Records

- CRUD Operation: Read
- REST Method: GET
- Path: /food
- Returns: An array of objects, each object being one entry from your database.

#### Get One Record

- CRUD Operation: Read
- REST Method: GET
- Path: /food/1
- Returns: The object from the database, which has the id matching that which is in the path.

#### Update A Record

- CRUD Operation: Update
- REST Method: PUT
- Path: /food/1
- Input: JSON Object in the Request Body
- Returns: The object from the database, which has the id matching that which is in the path, with the updated/changed data.
  - You should verify that only the fields you define get saved as a record.

#### Delete A Record

- CRUD Operation: Destroy
- REST Method: DELETE
- Path: /food/1
- Returns: The record from the database as it exists after you delete it (i.e. `null`).

### Implementation Notes

- Create an express server with the following proposed structure

```text
├── .gitignore
├── .eslintrc.json
├── __tests__
│   ├── server.test.js
│   ├── logger.test.js
├── src
│   ├── error-handlers
│   │   ├── 404.js
│   │   ├── 500.js
│   ├── middleware
│   │   ├── logger.js
│   │   ├── validator.js
│   ├── models
│   │   ├── collection-class.js
│   │   ├── index.js
│   │   ├── food.js
│   │   ├── clothes.js
│   ├── routes
│   │   ├── food.js
│   │   ├── clothes.js
│   ├── server.js
├── index.js
└── package.json
```

- In your server.js, `require()` your router modules, and `use()` them
- In your routers
  - `require()` the correct data model
  - `require()` the collection class
  - Make a new instance of the collection, using the model as a parameter
  - Your routes, if you followed the API pattern from your previous assignments should already be set up to call the right methods in your collection
    - Remember, Sequelize methods are asynchronous. Be sure and account for this!

### Testing Requirements

- Be sure to specify `NODE_ENV=test` in your package.json test script.
- Assert the following
  - 404 on a bad route
  - 404 on a bad method
  - The correct status codes and returned data for each REST route
    - Create a record using POST
    - Read a list of records using GET
    - Read a record using GET
    - Update a record using PUT
    - Destroy a record using DELETE

### Deployment

Your server must be deployed to Heroku. Please note the deployed URL in your README!

### Stretch Goal

Currently, as you add new models (imagine a system with 100 or more data models), you need to continually build new routes to use each model. Given that the code in the route modules is virtually identical (save for the `require()` of the correct data model), we should find a way to DRY this system.

- Create a new route module called `v1` as a copy of one of your other, working routes
- `require()` and `use()` this new router in your server
  - Assign the `/api/v1` prefix to these routes.
- Devise a way that you can `require()` the correct data model file based on the route
  - i.e.
    - <http://localhost:3000/api/v1/clothes> should require and use the file `models/clothes.js`
    - <http://localhost:3000/api/v1/food> should require and use the file `models/food.js`
  - Hint: use a route parameter along with middleware ... you might need to do some research
- Once you have this working, delete your other (now no longer needed) route modules and the references to them in your server

## Assignment Submission Instructions

Refer to the the [Submitting Express Server Lab Submission Instructions](../../../reference/submission-instructions/labs/express-servers.md) for the complete lab submission process and expectations
