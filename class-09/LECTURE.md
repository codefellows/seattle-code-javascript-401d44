# Class 09: Auth Final Project

## Announcements

Tomorrow DSA is at 9:00AM / career coaching will be at 2:00PM

## Code Review

What do you need to know about auth?
* Terminology!
* Reading questions.
* API plus Auth will stick around.

Conceptual Review
* Testing our token:
  * if you want to validate your token:
    * `jwt.verify(tokenFromResponse, SECRET)`;
  * testing our v2 routers:
    * whenever we make a request to v2 (protected routes)
      * in your test save you token.

```js
describe('', () => {
  let token = null;

  it('signin', () => {
    let response = request..post('signin')

     token = response.body.token; 
  });

  it('/secret', () => {
    request.post('/secret').set({
      authorization: `bearer ${token}`
    });
  });

});

```

### Terminology

* Authentication: determining who someone is.
  * 2 ways: basic and bearer.
    * basic: checking username and password. using strings.
    * bearer: checking who someone is using a token.
* Authorization: If we know who you are, are you permitted?
  * Role based access control list.
    * "capabilities" assigned to a user "role".
    * On request, once our authentication is successful we can check if their role contains a required "capability" => defined on the route.
  
* Singleton: There can be only one!
  * Whenever we create a class, we create on instance (not exactly singleton) as long as we want to create just one.
  * Database: New Sequelize() => we only want one instance of Sequelize.
  * Express: `const app = express()`

In what order to these events happen (Oauth handshake)

1) Register your application to get a client_id and client_secret (signup)
2) Ask the client if they want to sign in via a third party (signin)
3) Redirect to a third party authentication endpoint
4) Receive authorization code
5) Make a request to the access token endpoint
6) Receive access token
7) Make a request to a third-party API endpoint

Auth0 - a product / company that offers a authentcation as a third party service.

Endpoint: URL or URI (string) that points to a server that can handle http requests.

Client ID: an identifier for the application itself.
Client Secret: a value that is used to validate the id.
Authentication Endpoint: An endpoint that used to to figure out who someone is.
Access Token Endpoint: An endpoint that returns an access token, typically includes the `Authorization Code`.
API Endpoint: 
Authorization Code
Access Token
encryption
token
secret: strings that are used validate users, and should be hidden at all costs.  private keys / secrets, passwords.
JSON Web Token
Router Middleware
Dynamic Module Loading: Enables loading of modules whenever you need to, instead of loading on file read. Feature of Node.
CRUD -> REST Method Matches: POST = create / GET = read / PUT and PATCH = update / DELETE = delete.
Mock Testing

## Auth API Projects

See lab document
