# Class 07: Bearer Authentication

## Warm Up

Create an algorithm that when given a Node to remove, can remove it from a linked list:
[](https://projects.invisionapp.com/freehand/document/f8qws665p)

## Code Review

Adding Basic auth to an API server!
How did things go?

* bcypt.compare is returning false when checking passwords, takes 2 arguments.
  * clear password
  * hashed password
* 403 for both routes: whyyy??
* Tests working / but http client is not working.
  * Prefer tests over clients as the source of truth!
* Supporting JSON and form.

Code Challenge:
* Keep your node_modules in the root level of a project.

## Bearer Tokens

Passing strings back and forht is both cumbersome, and is not super secure.

* Tokens are just an object (encoded as strings) that can validate where they originated from.
* Tokens can be validated on request, we want to know if the token came from our server by verifying a signature.

### JSON Web Token

Can take an object:

```json

{
  "username": "Jacob"
  "id": 1
}

and sign with as signature: 'secret string'

* converts to a standarized encoded string. that can be decoded easily, but can only be verfied server side.
* If any tampering of the token is noticed, ther verification will fail and we won't honor that request. 


```

## DEWO: Build Bearer Authentication Middleware
