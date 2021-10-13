# Node Ecosystem, TDD, CI/CD

Application development in the Node.js ecosystem, including the writing of modular code using CommonJS modules, writing tests to assert code quality, setting up and working in a "Continuous Integration"  environment (Github Actions).

## Learning Objectives

### Students will be able to

#### Describe and Define

- Node and the V8 Engine

#### Execute

- Setup a Node.js Package using npm
- Create CommonJS modules
- Create a simple express server
- See passing tests via GitHub actions (CI)
- Deploy to Heroku using CD

## Today's Outline

<!-- To Be Completed By Instructor -->

## Notes

### Importing and Exporting Modules

If one module **exports** a function or an object ...

```javascript
// person.js
const person = {};

person.walk = function() {
  return 'walking';
}

module.exports = person;
```

Another module can **import** and use that function or object

```javascript
const human = require('./person.js'))
console.log( human.walk() );  // prints 'walking'
```

### CI/CD - Continuous Integration and Deployment

In your lab today, you'll be doing a full "professional" deployment using 2 branches, PR's, and a continuous process to get your code deployed.

You will repeat this process for every server based lab moving forward. Keep these notes (and the lab steps) handy for future reference
