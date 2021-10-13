# ES6 Classes - Demo Code

## Constructor Functions & Prototypes

```javascript
const Animal = function(name, legs) {
  this.name = name;
  this.legs = legs;
  this.eat = function() {
    this.isEating = true;
  }
}
Animal.prototype.walk = function() {
  this.isWalking = true;
}

const Dog = function(name, legs) {
  Animal.call(this, name, legs);
}
Dog.prototype = Object.create(Animal.prototype);

let puppy = new Dog('blake', 4);
puppy.walk();
puppy.eat();
console.log(puppy);
console.log(puppy instanceof Animal);
console.log(puppy instanceof Dog);
```

## ES6 Classes

```javascript
class Animal {

  constructor(name, legs) {
    this.name = name;
    this.legs = legs;
  }

  walk() {
    this.isWalking = true;
  }

  eat() {
    this.isEating = true;
  }

}

class Dog extends Animal {

  constructor(name, legs, furType) {
    super(name,legs);
    this.furType = furType;
  }

  speak() {
    console.log('Wooof!');
  }

}

let rosie = new Dog('rosie', 4, 'Short Hair');
rosie.walk();
rosie.eat();
console.log(rosie);
rosie.speak();
```
