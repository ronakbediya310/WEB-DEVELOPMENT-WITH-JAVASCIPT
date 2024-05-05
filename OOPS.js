/* 
  Object-Oriented Programming (OOP) in JavaScript is a programming paradigm based on the concept of "objects", which can contain data and code: data in the form of properties
   (often referred to as "attributes" or "fields") and code in the form of methods (functions associated with the object).

   JavaScript supports OOP features like classes, inheritance, encapsulation, and polymorphism, although its implementation differs from classical OOP languages like Java or C++. 
   In JavaScript, objects can be created using constructor functions, classes (introduced in ECMAScript 2015), or object literals.

  */
// Constructor function
function Person(name, age) {
  // Properties
  this.name = name;
  this.age = age;
  
  // Method
  this.sayHello = function() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  };
}


// ES6 Class syntax
class Animal {
    constructor(name) {
      this.name = name;
    }
  // Method
  makeSound() {
    console.log('Animal makes a sound');
  }
}  

class Dog extends Animal {
    constructor(name, breed) {
      super(name);
      this.breed = breed;
    }
  
    // Overriding method
    makeSound() {
      console.log('Dog barks');
    }
  }

  