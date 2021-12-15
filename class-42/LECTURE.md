# Class 42 - Typescript

## Warm Up

how to compare 2 hahsbtables?

```js
let map = new HashtTable();
let map2 = new HashTable();

// is map the same reference as map2?
if (map == map2)

// does map contain the same values as map2?
//  create a a function that returns the values for a hasmap, and compare.

```

Focus on a UML that would allow you solve the prompt:

`If you are given 2 strings, how would find and return a substring shared by both?`

input: `cat and` = > a
input: `cart smart` => art

## Code Review

Please send me questions / find me in remo.

## Getting Started

Typescript!!

What is Typesccript???

* It is Javascript with types
  * types - 5 immutable types.
    * JS is loosely typed: we can define a variable as one type and changfe it to another.

```javascript
let name = "jacob";

name = 30; // this is a big issue.

// js in the js console, is usuallly protected by the browser.
//  so for the most part this is fine.

// once we leave the safety of the browser / our browser apps become very complex.  IT might be time to use the safety of strict types.
```

* typescript is a super set of JS that adds more strictness.
  * It does not change the existing syntax ( all js is valid typescript)
  * We add some syntax features on top of the existing syntax.

`let name = 'Jacob' // this will work, but if we configure ts to not allow variables without an immutable defined, this won't compile`;

* Step 1: install the typescript node_module.
  * Gives us the superset
  * Plus a compiler `tsc` installed as a command that we can run using npm.
    * returns normal(ish) javascript.
* Step 2: configure ts with a tsconfig.json
  * format presecribed my Microsft.
  * run `tsc init`

## Front End

* see `front` directory

## Back End

* See `back` directory
