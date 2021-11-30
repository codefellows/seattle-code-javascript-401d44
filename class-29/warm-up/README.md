# Warm Up - Object Search

Does an object contain a value at some deeply nested property? `$$.get()` it

## Overview

Very often, you'll need to see if an object has a certain property

i.e. `if(person.name) { ... }`

If an object is undefined, or doesn't have a "deeply nested" property, you'll run into an error.

```javascript
let person = {
  age: 50,
  hair: false
}

let spouse = person.spouse.name;

// ERROR: TypeError: Cannot read property 'name' of undefined
```

Often, we'll fix that like this, which is pretty terrifying:

`let spouse = person && person.spouse && person.spouse.name`

## Challenge: `$$.get()`

Write a method in the Shredder library called `.get()` that can find a property of an object and either return the value at that key, or `undefined`

```javascript
let person = {
  age: 50,
  hair: false,
  pet: {
    name: 'rocky'
  }
}

let spouse = $$.get(person, 'spouse.name'); // undefined

let pet = $$.get(person, 'pet.name'); // rocky
```
