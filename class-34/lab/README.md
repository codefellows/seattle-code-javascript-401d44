# LAB -  API Integration

**To Do List Manager Phase 4:** Integrating with a live API

In this final phase, we'll be requiring that users be logged in through a live authentication server, in order to see the to do items. Additionally, based on their user type, they will be allowed (or denied) to perform actions such as editing or deleting them. All To Do items will be stored in a database, accessed through a deployed API

## Before you begin

Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

> Building off of your previous day's branch, create a new branch for today called 'auth' and continue to work in your 'todo' repository.

## Business Requirements

Refer to the [To Do System Overview](../../apps-and-libraries/todo/README.md) for a complete review of the application, including Business and Technical requirements along with the development roadmap.

## Phase 4 Requirements

In Phase 4, we will finalize the functionality of the application by connecting to live servers for login, authorization, and data access

## Technical Requirements / Notes

> Technical requirements for the core application are unchanged from the prior phases, with the addition of Performing actual HTTP requests with an Authenticated API server:

1. Alter the Add, Toggle Complete, and Delete functions within your to do application to use your API instead of in memory state.
   - Fetch the current list of items from the database on application start
   - Whenever you add/update/delete an item, refresh the state so the user can instantly see the change
     - Consider: Do you re-fetch from the server every time you make a change?
       - If so, how?
       - If not, how will you stay in sync?

1. Alter the Login Context to use the server to login users instead of our mock users list.
   - Be sure to store the token in state as well as in a cookie so you can reference it later.

### Stretch Goal

Use authorization middleware on the server to add another layer of protection, so that only users with the correct permissions can POST/UPDATE/DELETE.

If you choose to do this, you'll need to send a bearer token with every request...

### API Server

- You will need deployed API Server, which implements a todo item data model
  - `GET /todo`: Gets a list of all items
  - 'POST /todo': Adds an item
  - 'PUT /todo': Updates an item (you'll use this to mark them as complete)
  - 'DELETE /todo/:id' : Deletes an item

### Authentication Server

- You will need a deployed Authenticated API Server, which supports:
  - Registration (`/signup`)
  - Login (`/signin`)
  - Authorization (via Bearer Token)
  - ACL (using user roles)
    - Make sure you have created the user roles and permissions lists that your front-end is expecting to tap into
  - To Do data model for storing the actual to do items

### Testing

- Write unit tests for the Login Context Component
- Write unit tests for the Login/Auth components
  - Hide/Show based on status
- You will need to create some mocking interface to fake a server/login to simulate.
- Tests should assert all behavioral functionality

### Assignment Submission Instructions

Refer to the the [Submitting React Apps Lab Submission Instructions](../../../reference/submission-instructions/labs/react-apps.md) for the complete lab submission process and expectations
