# Access Control (ACL)

While **Authentication** answers the question "Who are you?" ... or more specifically "Are you who you say you are?", **Authorization** takes the next step and asks "Are you allowed to do the thing you're asking to do?"

Given a proper and valid user with a set of permissions, we can grant or restrict access to anything in our server.

## Learning Objectives

### Students will be able to

#### Describe and Define

- Authorization
- Roles
- Capabilities
- Access Control

#### Execute

- Implement a permissions based access control middleware module.
- Integrate back-end authorization controls using Express and Postgres Database.
- Use a virtual column for capabilties, to create a roles system.

## Today's Outline

<!-- To Be Completed By Instructor -->

## Notes

### Access Controls

Access Controls are the selective restriction of resources. Access Controls are implemented everywhere in computer systems. UNIX files have read, write, and execute permissions assigned to owners, groups, and everyone else. Websites have limited access to pages based on the credentials of a user. APIs restrict access to internal and external developers differently.

In our RESTful APIs, it is important to limit access to clients based on credentials. This means a user (Foo) should not be able to delete a users (Bar) resource, unless Bar said that Foo is allowed to. Limiting what actions a user can preform on a given resource is called Access Control. A user can be given a token at signup and login, and that user can pass that token back to the server on requests with limited access controls. Once the server parses the token, it can determine if the user is authorized to preform the request.

### Application Flow and Access Control

- Applications of all types have varying degrees of access based on user type and UI requirements.

A CMS might ...

- Allow **admin** users to create categories, content, manage user accounts, and run reports
- Allow **editor** users to create, edit and delete existing content, but not see or manage user accounts
- Allow **guest** users to access (read) content
- Allow **user** users (logged in users) to access (read) content and apply a thumbs-up/down to content, but not change the actual content

Each of these constraints will have to be handled on both the backend and the front end of your application stack.

#### Back End (API Layer)

- Manage the login cycle with the front-end application
- Maintain the User's database
- Maintain roles for each user
- Authenticate users (basic and bearer)
- Create, manage, and apply Role Based Access Controls
- Maintain and reference their capabilities, based on their role
- Restrict access to features (like routes) based on capabilities
  - Express Middleware could be used to restrict access to routes
  - Sequelizes Middleware/Hooks could be use to restrict access to business logic

#### Front End (Client Layer)

- Initiate the login process
- Store login tokens as cookies
- Manage login state, capabilities
- Control physical & visual access (hide/show/alter) to components based on RBAC rules
- Alter behaviors based on RBAC rules
