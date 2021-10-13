# Readings and Resources: ES6 Classes

Below you will find some reading material, code samples, and some additional resources that will help you to better understand ES6 Classes

- Watch the [Shred Talk: ES6 Classes](https://youtu.be/9Yc5J3Ap9-4){:target="_blank"}
- Review the [Demo Code](./DEMO.md){:target="_blank"}
- Complete the [Assignment](./LAB.md){:target="_blank"}

## Objects and Inheritance

JavaScript objects use prototype-based inheritance. Its design is logically similar (but different in implementation) from class inheritance in strictly Object Oriented Programming languages like Java and C#.

It can be loosely described by saying that when methods or properties are attached to object’s prototype they become available for use on that object and its descendants, but not directly attached to them.

When you use class and extends keywords internally JavaScript will still use prototype-based inheritance. It just simplifies the syntax (this is often called "Syntactic Sugar"). While classes are easier to use, it’s still very important to understand how prototype-based inheritance works. It’s still at the core of the language design.

### Prototypal Inheritance

```javascript
function Animal(name) {
  this.name = name;
}
Animal.prototype.walk = function() {}

function Bird(name) {
  // I can do all the things animals can do!
  Animal.call(this, name);
}
// Unlike other animals, birds can fly
Bird.prototype.fly = function() {}

// Make a new bird ..
let parrot = new Bird('parrot');
parrot.fly();
parrot.walk();
```

### ES6 Classes

The same thing with classes (much cleaner!)

- `function()` becomes `class {}`
- `call()` becomes `extends`
- Classes are standalone, self-contained object (instance) factories
  - Ultimately, they result in a prototype
  - But for the developer, they are many orders of magnitude easier to comprehend and work with

```javascript
class Animal {
  constructor(name) {
    this.name  = name;
  }

  walk() {}
}

// Thanks to 'extends', all birds can now do all things animals can
class Bird extends Animal {
  // Birds can walk, becuase they're animals also do their own thing.
  fly() {}
}

// Make one (the same was as before, but wasn't the class creation much easier?)
let parrot = new Bird('parrot');
parrot.fly();
parrot.walk();
```

## Additional Resources

- Video: [what the heck is the event loop anyway](https://www.youtube.com/watch?v=8aGhZQkoFbQ){:target="_blank"}
- [MDN inheritance](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain){:target="_blank"}
- [MDN this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this){:target="_blank"}
- [MDN class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes){:target="_blank"}
