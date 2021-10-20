# LAB: Express REST API

Dynamic API Phase 2: Perform CRUD Operations on a database

## Before you begin

1. Refer to the *Getting Started* guide  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md)
1. Create a new repository called `basic-api-server`
1. Work in a new branch called `dev`, created from `main`
1. Following completion of this assignment, create a Pull Request from `dev` to `main` and merge your code
   - You will deploy from your `main` branch to a new app at Heroku
   - You will add a link to the PR that you merged in your README for grading purposes

## Phase 2 Requirements

Build a REST API using Express, by creating a proper series of endpoints that perform CRUD operations on a database, using the REST standard

### SQL Models

- Create 2 SQL data models using the `Sequelize` libary, make sure you export those model instances.
- Make sure your Models are configured with your SQL dialect and can properly connect to your database.
  - Your models should have appropriate field names declared with specific sequelize `DataTypes`.

> For the data models, you are free to choose your own data types and describe their fields ... For Example: person, animal, car, instrument, game

### Routes

In your express server, create a route module for each data model that you've created. Within the router module, create REST route handlers for each of the REST Methods that properly calls the correct CRUD method from the matching data model.

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

REMINDER: Your app needs a new dependency today: **sequelize**

- `npm i sequelize sequelize-cli pg sqlite3`
- Remember to start your Postgres server:
  - Windows and Linux Users: `pg_ctl -D /home/linuxbrew/.linuxbrew/var/postgres start`
  - Mac Users: `brew services start postgres`

- Create an express server with the following proposed structure

```text
├── .gitignore
├── .eslintrc.json
├── config
│   ├── config.json
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
│   │   ├── index.js
│   │   ├── food.js
│   │   ├── clothes.js
│   ├── routes
│   │   ├── food.js
│   │   ├── clothes.js
│   ├── server.js
├── index.js
└── package.json
```

- In your server.js, `require()` your router modules, and `use()` them.
- In your routers, `require()` the correct data model and instantiate a new instance.

### Testing Requirements

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

## Assignment Submission Instructions

Refer to the the [Submitting Express Server Lab Submission Instructions](../../../reference/submission-instructions/labs/express-servers.md) for the complete lab submission process and expectations
