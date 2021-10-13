# Authentication

Restricting access to information online is one of the foundational paradigms of the internet. Whether it's your online bank account, facebook profile, or a one-time viewing of a document to sign, getting "logged in" to a website is an everyday activity for almost every internet user.

Today, we'll be looking at ways to create an account and securely authenticate a user using their chosen username and password

## Learning Objectives

### Students will be able to

#### Describe and Define

- The authentication process
- cryptographic hash and cypher algorithms

#### Execute

- Model a User and safely store their sensitive data
- Implement a Basic Authorization parser
- Use debugging and troubleshooting skills

## Today's Outline

<!-- To Be Completed By Instructor -->

## Notes

### Basic Authorization

Basic Authorization is a common method used to send a username and password in an HTTP request. The username and password are joined with a ':' then "base64 encoded" and placed after the string 'Basic '. The resulting string is set to the value of an Authorization header.

A Server can decode the Basic Authorization header to retrieve the username and password. If the combination is validated, the server generally responds back to the client with some sort of validation response (token or key) so that the client can re-authenticate without having to continually send the username:password combination in plain text over the internet.

> NOTE: base64 encoding is not a form of encryption. The client and server must use HTTPS to protect the username and password as it travels across the network.

In a node application, we can use a node module - `base-64` to do the work of decoding password strings coming from a login attempt in a browser

```javascript
let base64 = require('base-64');

let string = 'someusername:P@55w0rD!';
let encoded = base64.encode(string); // c29tZXVzZXJuYW1lOlBANTV3MHJEIQ==
let decoded = base64.decode(encoded); // someusername:P@55w0rD!
```

### Password Encryption

- Never (ever) store passwords in plain text
- Encryption is a one-way string transformation
- Use a secure hashing algorithm (such as bcrypt) to transform/encrypt passwords
- The only way to validate a password is to re-hash it and see if the hashes match or are equivalent

```javascript
const bcrypt = require('bcrypt');

let password = 'supersecret';

// Create a new hashed password
bcrypt.hash(password,5)
  .then( hashedPassword => {
    console.log(hashedPassword)
  })


// Validate a password
bcrypt.compare( password, hashedPassword )
  .then( isValid => {
    console.log(isValid)
  })
```

### Sequelize Static and Instance Methods

Given a Sequelize Model, we can create our own methods that add functionality not provided by Sequelize itself.

```javascript
// food-model.js
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(processe.env.DATABASE_URL);
const food = sequelize.define({
  { name: {type: DataTypes.STRING, allowNull: false }},
  { calories: {type: DataTypes.INTEGER, allowNull: false }},
})
module.exports = food;
```

#### Instance methods work on instances

Just like creating a method on our own JS constructor functions, sequelize lets us define functions that will be present on an object that the model produces.

```javascript
// food-model.js
food.prototype.points = function() {
  this.points = Math.floor(this.calories/10);
}

// other module ...
let carrot =  await food.create({name:'carrot', calories: 100})
console.log( carrot.points() ); // 10
```

### Static Methods operate at the model level, before (or without) an instance

These are useful for looking things up (like a user), pre-loading queries, validating an instance, etc. Generally, use these to return instances or collections

> NOTE: the only difference is we don't attach the prototype to our model, which signals we are defining methods on an instance.

```javascript
// food-model.js
food.getCarrots = function() {
  return this.find({name:'carror'})
}

// other module ...
let carrots = food.getCarrots();
```
