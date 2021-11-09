# Class 17: s3 and Lambda Functions

## Warm Up

Small group warm up:

* In small teams broken up into 2 halves : `client` half and the `server` half
  * Web Socket driven Search feature.


```js

// Roop: live shared with VS Code

// 1) send a payload from the client

// 2) search the array iteratively 

// 3) send back any result


/**
 * Server Side!
 */
const server = socketio(3000); // creates a socket server object that clients can connect to.
// const search = server.of('/search');

// do we really this here
const arrayStrings = ['test', 'hello world', 'foo', 'bar'];

// socket connection event!
server.on('connection', socket => {
  console.log(socket.id);

  // telling the server what to do when the 'socket` emits a `search` event
  socket.on('search', payload => {
    //  get a search string 
    let searchString = payload.text;

    // search our array using the payload
    if (arrayStrings.includes(searchString)) {
      socket.emit('search', {
        results: searchString,
      });
    } else {
      socket.emit('search', {
        results: null,
      });
    }
  });
});


/**
 * Client Side
 */

const client = require('socket.io-client');

const search = client.connect('http://localhost:3000');

search.on('search', console.log);

// when do we run this??
search.emit('search', {text: 'foo'});

```

## Code Review

How was deploying to Elastic Beanstalk

* How do I turn off instances.
* Evan: didn't work for some reason!
  * What files to zip?
    * Any js files.
    * package.json - gives instructions to machines:
      * what to install
      * how to run
    * package-lock.json - makes sure that version remain consistent when installing in differnet environments.
    * NO NODE_MODULES!!
    * NO README!!
    * Some dependencies are breaking apparently
      * jest / supertest / pg / sqlite3.
      * we are often connecting to a DB on init.
        * environment specific configuration could break your js.
    * 400 errors (bad requests / authentication / unauthorized)
  * eb init: installing elastic beanstalk cli is not clear.
    * `brew install awscli`
    * Dependency management of development environment.
      * Python is a dependency.
      * If you need to run python, create an alias for eb in your .bash_profile / .bashrc

## AWS s3

Simple Storage Service.

Organized into `Buckets` - a repository. Can be used to store any files (text files / images / videos).

* free to store any amount of stuff.
* Charge you for reads from your repository.
  * web site requests and image / video - cents per request.
Good for programatic access.

## AWS Lambda

A function that can be programmatically run.  Think of this as an express endpoint, that can be triggered by a lot more than simply an hTTP request.  Any service can trigger, AWS is easy to configure, other services just need permissions.

Micro Servers in the cloud!

* Much faster than a monolithic.
* Modular, program a bunch to manage micro pieces of your problem domain.
* Highly maintainable.
* Lamda `events` are things that trigger a lamdba function.

Deploy with github action:

* Add `.github/workflows/aws-publish.yml`
* Add you secrets to your github repostitory:
  * AWS_ACCESS_KEY_ID
  * AWS_SECRET_ACCESS_KEY
  * AWS_REGION
* Update `function_name` with the name of your function on AWS Lambda.

IF you are experiencing permissions issues: Make sure your `User Group` has s3 and lambda permissions attached.
